<script>
	import { scale } from "svelte/transition";
  let { 
		muted = false, 
		...props } = $props();
  const duration = 150;
</script>

<button class="unset btn_mute" aria-label="mute"
  title={muted ? "un-mute" : "mute"} {...props} >
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class:muted>
			<path class="bell" 
				d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77ZM12 4 7 9H3v6h4l5 5V4Zm2 3.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 14 7.97Z"/> 
			
			{#if muted}
			<path class="cross-fg" transition:scale={{duration}}
				d="M4.126 3.144 5.54 1.73l16.73 16.73-1.414 1.414Z"/>
			<path class="cross-bg" transition:scale={{duration}}
				d="m2.93 4.34 1.41-1.41 16.73 16.72-1.41 1.41Z"/>
			{/if}
		</svg>
</button>

<style>
  svg {
    font-size: 1.5em;
    .cross-fg { fill: var(--bg-panel); }
  }
</style>