<script>
  let { ...props } = $props();
</script>

<button class="unset btn_stop" {...props}
  aria-label="stop" title="stop" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M6 6h12v12H6z"/>
  </svg>
</button>

<style>
  .btn_stop {  font-size: 1.75em; }
</style>