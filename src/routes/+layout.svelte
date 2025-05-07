<script>
  import "./app.css";
  let { children } = $props();
  let online=$state();
</script>

<svelte:window bind:online />

<div class="app">
  {#if online}
  <div style="display: contents;">
    {@render children()}
  </div>
  {:else}
  <div class="offline panel">
    <div>..Offline</div>
  </div>  
  {/if}
</div>

<style>

</style>
