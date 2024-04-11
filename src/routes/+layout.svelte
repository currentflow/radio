<script>
  import "./app.css";
  let online;
</script>

<svelte:window bind:online />

<div class="app">
  {#if online}
  <slot />
  {:else}  
  <div class="offline">
    <h1>..Offline</h1>
  </div>
  {/if}  
</div>

<style>

  .app {
    height: 100%;    
  }
</style>