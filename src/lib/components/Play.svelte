<script>
  export let playing = false,
             duration = "300ms",
             title = "";
</script>

<button class="unset btn_play" {title}
  style="--duration: {duration};"
  on:click on:pointerdown>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class:playing>
    <path d="m10,16l3,-2l0,-4l-3,-2l0,8zm2,-14c-5.52,0 -10,4.48 -10,10s4.48,10 10,10s10,-4.48 10,-10s-4.48,-10 -10,-10zm0,18c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8s-3.59,8 -8,8zm1,-6l3,-2l0,0l-3,-2l0,4z"/>
	<!-- <path d="m10,16l6,-4l0,0l-6,-4l0,8zm2,-14c-5.52,0 -10,4.48 -10,10s4.48,10 10,10s10,-4.48 10,-10s-4.48,-10 -10,-10zm0,18c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8s-3.59,8 -8,8z"/> --> 
	</svg>
</button>

<style>
  .unset { margin: 0; padding: 0; }
  svg {
    width: 1.5em;
    height: 1.5em;
    font-size: inherit;
  }
	path {
		transition: var(--duration);
		transform-origin: center;
	}
  .playing path {	
    d: path('m9,16l2,0l0,-8l-2,0l0,8zm3,-14c-5.52,0 -10,4.48 -10,10s4.48,10 10,10s10,-4.48 10,-10s-4.48,-10 -10,-10zm0,18c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8s-3.59,8 -8,8zm1,-4l2,0l0,-8l-2,0l0,8z');
	
		/* d: path('m9,15l6,0l0,-6l-6,0l0,6zm3,-13c-5.52,0 -10,4.48 -10,10s4.48,10 10,10s10,-4.48 10,-10s-4.48,-10 -10,-10zm0,18c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8s-3.59,8 -8,8z'); */
	}
</style>