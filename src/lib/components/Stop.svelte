<script>
  export let title = "";
</script>

<button class="unset btn_stop" {title}
  on:click on:pointerdown>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M6 6h12v12H6z"/>
  </svg>
</button>

<style>
  .unset { margin: 0; padding: 0; }
  svg {
    width: 1.5em;
    height: 1.5em;
    font-size: inherit;
  }
</style>