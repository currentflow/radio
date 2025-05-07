<script>
  import { onDestroy, onMount, tick } from "svelte";
  import { store, stations, dbltap } from "$lib/store";
  import Play from "$lib/components/Play.svelte";
  import Stop from "$lib/components/Stop.svelte";
  import Mute from "$lib/components/Mute.svelte";
  import Range from "$lib/components/Range.svelte";
  import Info from "$lib/components/Info.svelte";

  let title = "Radio",
      selectedStation = null,
      pauseTimer, pauseDelay = 120000,
      stallTimer, stallDelay = 10000,
      // suspendTimer, suspendDelay = 10000,
      errorTimer, errorDelay = 10000,
      debug = true,
      errorMessage = null;
      
  let audioObj,
      loading = false,
      paused,
      currentTime, duration,
      ended, played, cycle,
			muted = false,
      networkState, readyState;

  $: { if (audioObj) {
    audioObj.volume = $store.volume;
  }}
  $: { 
    paused = audioObj?.paused;
    networkState = audioObj?.networkState;
  }

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
      }
    } catch (err) {
      console.error("togglePlay", err);
    }
  }

  function setPauseTimer() {
    clearTimeout(pauseTimer);
    pauseTimer = setTimeout(() => {
      stopAudio();
    }, pauseDelay);
  }

  async function stopAudio() {
		try {
			audioObj.pause();
			audioObj.src = null;
			audioObj.removeAttribute('src');
		  selectedStation = null;
      // reset..
      duration = audioObj?.duration;
      errorMessage = null;
		} catch (err) { 
      console.log("stopAudio: Error", err); 
      errorMessage = err;
    }
	}


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
  <div class="stations">
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
  </div>

  {#if debug}
  <Info
    src={audioObj?.src}
    title={selectedStation?.title ?? "..."}
    networkState={networkState} 
    readyState={readyState}
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
    bind:readyState
    bind:volume={$store.volume}
    bind:muted
    on:loadstart={() => {
      errorMessage = null;
      loading = true;
      cycle = "loadstart";
      if (debug) console.log("on:loadstart");
    }}
    on:waiting={() => {
      cycle = "waiting";
      if (debug) console.log("on:waiting");
    }}
    on:canplay={() => {
      cycle = "canplay";
      loading = false;
      errorMessage = null;
      if (debug) console.log("on:canplay");
    }}
    on:play={() => {
      cycle = "play";
      errorMessage = null;
      if (debug) console.log("on:play");
    }}
    on:playing={() => {
      cycle = "playing";
      errorMessage = null;
      if (debug) console.log("on:playing");
    }}
    on:pause={() => {
      cycle = "pause";
      setPauseTimer();
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
      if (debug) console.log("on:suspend");
    }}
    on:stalled={() => {
      cycle = "stalled";
      loading = false;
      errorMessage = "stalled: data not available";
      
      clearTimeout(stallTimer);
      stallTimer = setTimeout(() => {
        errorMessage = null;
      }, stallDelay);
        
      if (debug) console.log("on:stalled");
    }}
    on:abort={() => {
      cycle = "abort";
      loading = false;
      if (debug) console.log("on:abort");
    }}

    on:error={(error) => {
      cycle = "error";
      loading = false;
      errorMessage = audioObj?.error.message;

      clearTimeout(errorTimer);
      errorTimer = setTimeout(() => {
        stopAudio();
      }, errorDelay);

      if (debug) console.log("on:error", error);
    }}
  >
  </audio>
</main>

<footer>
  <Play playing={!paused} 
    title={paused ? "play" : "pause"}
    on:click={() => togglePlay()} />
  <div class="volume">
    <Stop on:click={stopAudio} title="stop"/>

    <Range bind:value={$store.volume}
      on:change={() => {
        if (muted) muted = false;
      }} />
      
    <Mute bind:muted title={muted ? "un-mute" : "mute"} />
  </div>
</footer>

<style>

</style>
