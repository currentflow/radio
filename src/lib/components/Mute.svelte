<script>
  export let muted = false,
             duration = "300ms",
             title = "";
</script>

<button class="unset btn_mute" {title}
  style="--duration: {duration};"
  on:click={() =>  muted = !muted } >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class:muted>
    <path class="bell" 
      d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77zM12 4 7 9H3v6h4l5 5V4zm2 3.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 14 7.97z"/>
      
    <path class="cross-bg" fill="var(--background-color)" 
      d="M4.126 3.144 5.54 1.73l16.73 16.73-1.414 1.414Z"/>
    <path class="cross-fg" 
      d="M3 4.27 4.27 3 21 19.73 19.73 21Z"/>
  </svg>
</button>

<style>
  svg {
    /* scale: 4; */
    width: 1.5em;
    height: 1.5em;
    font-size: inherit;
    fill: currentColor;
  }
	.muted { transition: var(--duration); }
  [class^="cross"] {
    transform-origin: 50%;
    transition: var(--duration);
    scale: 0 0.9;
    opacity: 0;
  }
  .muted [class^="cross"] {
    scale: 1;
    opacity: 1;
  }
	/* .muted {
		opacity: 0.5;
	} */
</style>