<script>
  export let src,
    networkState, readyState,
    currentTime, duration, 
    volume, muted,
    loading, paused,
    ended, cycle;

  function formatTime(secs) {
    const hours = secs >= 3600 ? Math.floor(secs / 3600) : 0;
    const minutes = Math.floor((secs - hours * 3600) / 60);
    const seconds = Math.floor(secs % 60);
    const paddedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    let res = hours
      ? `${hours}:${paddedMinutes}:${paddedSeconds}`
      : `${minutes}:${paddedSeconds}`;

    return res;
  }

    // $: formatedDuration = formatTime(duration);

</script>


<div class="flex">
  <div class="grid" style:flex=3>
    <div class="key">src</div>
    <!-- <div class="value" title={src}>{src || "empty string"}</div> -->
    <div class="value" title={src}>{src?.split("/").pop() || "empty string"}</div>
    
    <div class="key" title="Current playback time in seconds">currentTime</div>
    <div class="value">{currentTime}</div>
    
    <div class="key" title="Duration of the media in seconds">duration</div>
    <div class="value">{duration}</div>
    
    <div class="key" title="    0 = NETWORK_EMPTY - audio/video has not yet been initialized
    1 = NETWORK_IDLE - audio/video is active and has selected a resource, but is not using the network
    2 = NETWORK_LOADING - browser is downloading data
    3 = NETWORK_NO_SOURCE - no audio/video source found">networkState</div>
    <div class="value">{networkState}</div>
    
    <div class="key" title="    0 = HAVE_NOTHING - no information whether or not the audio/video is ready
    1 = HAVE_METADATA - metadata for the audio/video is ready
    2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
    3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
    4 = HAVE_ENOUGH_DATA - enough data available to start playing">readyState</div>
    <div class="value">{readyState} </div>     
  </div>
  
  <div class="grid" style:flex=2>      
    <div class="key" title="Boolean: toggled by loadstart and canplay events">loading</div>
    <div class="value">{loading}</div>
    
    <div class="key" title="Boolean: playback is paused">paused</div>
    <div class="value">{paused}</div>
                 
    <div class="key" title="Boolean: the element has finished playing">ended</div>
    <div class="value">{ended}</div>  
                 
    <div class="key" title="Triggered by element events">cycle</div>
    <div class="value">:{cycle}</div>
    
    <div class="key" title="value: volume">volume</div>
    <div class="value">{volume}</div>
    
    <div class="key" title="boolean: muted">muted</div>
    <div class="value">{muted}</div>
  </div>
</div>

<style>
  .flex {
    margin: 1rem 0;
  }
</style>