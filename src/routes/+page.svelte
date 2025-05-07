<script>
  import { tick } from "svelte";
  import { store, stations, formatTime } from "$lib/store";
  import Play from "$lib/components/Play.svelte";
  import Stop from "$lib/components/Stop.svelte";
  import Mute from "$lib/components/Mute.svelte";
  import Range from "$lib/components/Range.svelte";
  import "./app.css";

  // app level variables
  let online = $state();
  let title = $state("Radio"),
    innerWidth = $state(0),
    timer = $state(),
    debug = $state(true),
    audioEl = $state(),
    i = $state(0),
    cycle = $state(),
    selectedStation = $state.raw(null);

  // two-way bindings
  let currentTime = $state(0),
    paused = $state(true),
    networkState = $state(),
    muted = $state();

  // readonly properties
  let src = $state(),
    buffered = $state(),
    duration = $state(0),
    readyState = $state();

    async function loadStation(station = stations[0]) {
    ++i;
    try {
      if (debug) console.log(i, "loadStation");
      audioEl.load();
      selectedStation = station;
      audioEl.src = selectedStation.url;
      await tick();
      audioEl.play();
    } catch (err) {
      console.error(i, "loadError:", err);
    }
  }
  function togglePlay() {
    if (!selectedStation) {
      loadStation();
      return;
    }
    try {
      paused = !paused;      
    } catch (err) {
      console.error(i, "togglePlay:", err);
    }
  }
  function stopAudio() {
    ++i;
    try {
      audioEl.src = null;
      audioEl.removeAttribute("src");
      selectedStation = null;
      currentTime = 0;
      duration = 0;
      audioEl.load();
      paused = audioEl.paused;
    } catch (err) {
      console.error(i, "stopError:", err);
    }
  }
</script>

<svelte:window bind:online bind:innerWidth />

<div class="app">
  {#if online}
    <div class="panel header">
      <div class="title">{selectedStation?.title || title}</div>
      <button class="unset version"
        ondblclick={() => debug = !debug}>v: {$store.version}</button>
    </div>

    <div class="panel stations">
      <div class="flex-item">
        {#each stations as station}
        <button class="unset station"
          class:active={selectedStation === station}
          onclick={() => {
            selectedStation = station;
            loadStation(selectedStation);
          }}>
          <div class="title">{station.title}</div>
          <div class="description">{station.description}</div>
        </button>
        {/each}
      </div> <!-- flex-item -->

      <div class="flex-item">
        {#if debug}
        <div class="info">
          <div class="column">
            <div class="key">currentTime</div>
            <div class="value">{formatTime(currentTime) || "..."}</div>
          
            <div class="key">duration</div>
            <div class="value">{formatTime(duration) || "..."}</div>
          
            <div class="key">networkState</div>
            <div class="value">{audioEl?.networkState}</div>
          
            <div class="key">readyState</div>
            <div class="value">{readyState}</div>            
          </div> <!-- column -->
          
          <div class="column">
            <div class="key">paused</div>
            <div class="value">{paused}</div>
          
            <div class="key">volume</div>
            <div class="value">{muted ? "muted" : $store.volume}</div>
          
            <div class="key">cycle</div>
            <div class="value">{cycle || "..."}</div>            
          </div> <!-- column -->
        </div> <!-- info -->
        {/if}
      </div> <!-- flex-item -->
    </div> <!-- stations -->

    <div class="panel footer">
      <Play playing={!paused} onclick={togglePlay} />

      <div class="group">
        <Stop onclick={stopAudio} />
        <Range bind:value={$store.volume}
          oninput={() => (muted = false)} />
        <Mute {muted} onclick={() => muted = !muted} />
      </div>
    </div>
  {:else}
  <div class="offline panel">
    <div>..Offline</div>
  </div>  
  {/if}
</div>


<audio crossorigin="anonymous"
  bind:this={audioEl}
  bind:paused
  bind:currentTime
  bind:duration
  bind:readyState
  bind:volume={$store.volume}
  bind:muted
  onplay={() => {
    ++i; cycle = "play";
    if (debug) console.log(i, cycle);
  }}
  onwaiting={() => {
    ++i; cycle = "waiting";
    if (debug) console.log(i, cycle);
  }}
  onloadstart={() => {
    ++i; cycle = "loadstart";
    if (debug) console.log(i, cycle);
  }}
  oncanplay={() => {
    ++i; cycle = "canplay";
    if (debug) console.log(i, cycle);
  }}
  onplaying={() => {
    ++i; cycle = "playing";
    if (debug) console.log(i, cycle);
  }}
  onpause={() => {
    ++i; cycle = "pause";
    if (debug) console.log(i, cycle);
    timer = setTimeout(() => {
      stopAudio();
    }, 30000);
  }}
  onabort={() => {
    ++i; cycle = "abort";
    if (debug) console.log(i, cycle);
  }}
  onended={() => {
    ++i; cycle = "ended";
    if (debug) console.log(i, cycle);
  }}
  onsuspend={() => {
    ++i; cycle = "suspend";
    if (debug) console.log(i, cycle);
  }}
  onstalled={() => {
    ++i; cycle = "stalled";
    if (debug) console.log(i, cycle);
  }}
  onemptied={() => {
    ++i; cycle = "emptied";
    if (debug) console.log(i, cycle);
  }}
  onerror={() => {
    const err = audioEl?.error.message;
    ++i; cycle = "error" + err;
    if (debug) console.log(i, cycle, err);
  }}
></audio>
