<script>
  import { formatTime, round } from "$lib/store";
  export let src,
    networkState, readyState,
    currentTime, duration, 
    volume, muted,
    loading, paused, errorMessage,
    ended, cycle = "";

    if (muted) {} // mute error for unused property
</script>


<div class="info flex">
  <div class="grid" style:flex=3>
    <div class="key">src</div>
    <div class="value" title={src}>...{src?.split("/").pop() || ""}</div>
    
    <div class="key" title="Current playback time in seconds">currentTime</div>
    <div class="value">{formatTime(currentTime)}</div>
    
    <div class="key" title="Duration of the media in seconds">duration</div>
    <div class="value">{formatTime(duration)}</div>
    
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
    <div class="value">{readyState}</div> 
  </div>
  
  <div class="grid" style:flex=2>      
    <div class="key" title="Boolean: toggled by loadstart and canplay events">loading</div>
    <div class="value">{loading}</div>
    
    <div class="key" title="Boolean: playback is paused">paused</div>
    <div class="value">{paused}</div>
                 
    <div class="key" title="Boolean: the element has finished playing">ended</div>
    <div class="value">{ended}</div>  
    
    <div class="key" title="volume">volume</div>
    <div class="value">{muted ? "muted" : round(volume*10, 1)}</div>
                 
    <div class="key" title="Triggered by element events">cycle</div>
    <div class="value">{cycle}..</div>
  </div>

  {#if errorMessage}
  <div class="errorMessage" title="error" >
    {errorMessage}
  </div>
  {/if}
</div>



<style>
  .info {
    margin: 1rem 0;
  }
  .errorMessage { flex-basis: 100%; }
</style>