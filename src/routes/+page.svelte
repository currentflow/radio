<script>
  import { onDestroy, onMount, tick } from "svelte";
  import { store, stations, formatTime, dbltap } from "$lib/store";
  import Play from "$lib/components/Play.svelte";
  import Mute from "$lib/components/Mute.svelte";
  import Range from "$lib/components/Range.svelte";
  import Info from "$lib/components/Info.svelte";


  let title = "Radio",
      selectedStation = null,
      timer, timerDelay = 182000,
      debug = true,
      message = null;
      
  let audioObj,
      loading = false,
      paused,
      currentTime, duration,
      ended, played, cycle, 
      errorMessage = null,
			muted = false;

  $: { if (audioObj) {
    audioObj.volume = $store.volume;
    paused = audioObj.paused;
  }}

  async function loadStation(station = stations[0]) {
    if (!paused) stopAudio();

    errorMessage = null;
    selectedStation = station;
    audioObj.src = selectedStation.url;
    await tick();
    audioObj.play();
  }

  function togglePlay() {
    if (!selectedStation) {
      loadStation(stations[0]);
      return;
    }

    try {
      if (audioObj.paused) {
        audioObj.play();
      } else {
        audioObj.pause();
        clearTimeout(timer);
				timer = setTimeout(() => {
					stopAudio();
				}, timerDelay);
      }
    } catch (err) {
      console.error("togglePlay", err);
    }
  }

  async function stopAudio() {
		try {
			audioObj.pause();
			audioObj.src = null;
			audioObj.removeAttribute('src');
		  selectedStation = null;
      // reset..
      // paused = audioObj?.paused;
      duration = audioObj?.duration;
		} catch (error) { 
      console.log("stopAudio: Error"); 
    }
	}

  // function handleError() {
  //   audioObj.paused = true;
  //   paused = audioObj?.paused;
  //   console.log("DEBUG");
  //   stopAudio();
  // }

  onMount(() => {
    audioObj.crossOrigin = "anonymous";
  })

  onDestroy(() => {
    if (audioObj) {
			audioObj.pause();
			audioObj.src = null;
      audioObj.removeAttribute("src");
      cycle = "destroyed";
    };
  });
</script>


<header>
  <h1>{selectedStation?.title ?? title}</h1>

  <button class="unset" use:dbltap
    on:dbltap={() => debug = !debug}
    style="height: 100%;padding: 0 1ch;" >
    <small>v: {$store.version}</small>
  </button>
</header>

<main class="list">
  {#each stations as station}
  <button class:selected={station === selectedStation}
    class="unset station"
    title={station.url}
    on:click={() => loadStation(station)}
  >
    <div class="title">{station.title}</div>
    <div class="description">{station.description}</div>
  </button>
  {/each}


  {#if debug}
    <Info
      src={audioObj?.src}
      networkState={audioObj?.networkState} 
      readyState={audioObj?.readyState}
      currentTime={currentTime} 
      duration={duration}
      {loading} {paused}
      {ended} {cycle}
      volume={$store.volume} {muted} {errorMessage}
    />
  {/if}

  <audio
    crossorigin="anonymous"
    bind:this={audioObj}
    bind:currentTime
    bind:duration
    bind:paused
    bind:ended
    bind:played
    bind:volume={$store.volume}
    bind:muted
    on:loadstart={() => {
      message = null;
      loading = true;
      cycle = "loadstart";
      if (debug) console.log("on:loadstart");
    }}
    on:waiting={() => {
      cycle = "waiting";
      if (debug) console.log("on:waiting");
    }}
    on:canplay={() => {
      loading = false;
      cycle = "canplay";
      errorMessage = null;
      if (debug) console.log("on:canplay");
    }}
    on:play={() => {
      cycle = "play";
      if (debug) console.log("on:play");
    }}
    on:playing={() => {
      errorMessage = null;
      cycle = "playing";
      if (debug) console.log("on:playing");
    }}
    on:pause={() => {
      cycle = "pause";
      if (debug) console.log("on:pause");
    }}
    on:ended={() => {
      cycle = "ended";
      errorMessage = "ended";
      if (debug) console.log("on:ended");
    }}
    on:emptied={() => {
      cycle = "emptied";
      if (debug) console.log("on:emptied");
    }}
    on:suspend={() => {
      cycle = "suspend";
      loading = false;
      errorMessage = "suspended: not getting data";
      if (debug) console.log("on:suspend");
    }}
    on:stalled={() => {
      cycle = "stalled";
      loading = false;
      errorMessage = "stalled: data is not available";
      if (debug) console.log("on:stalled");
    }}
    on:abort={() => {
      cycle = "abort";
      loading = false;
      errorMessage = "loading aborted";
      if (debug) console.log("on:abort");
    }}
    on:error={(error) => {
      cycle = "error";
      loading = false;
      errorMessage = audioObj?.error.message;
      if (debug) console.log("on:error", error);
    }}
    on:timeupdate={() => {
      // if (debug) console.log("on:timeupdate");
    }}
    on:volumechange={() => {
      // if (debug) console.log("on:volumechange");
    }}
  >
    <p><code>an error occurred</code></p>
  </audio>
</main>

<footer>
  <Play playing={!paused} 
    on:pointerdown={() => togglePlay()}
    on:dbltap={() => stopAudio()} />

  <small style="align-self: flex-end">
    {formatTime(currentTime)} / {formatTime(duration)}
  </small>

  <div class="volume">
    <Range bind:value={$store.volume}
      on:change={() => console.log("Volume:", $store.volume)} />
      
    <Mute bind:muted />
  </div>
</footer>

<style>

</style>
