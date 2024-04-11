<script>
  // import { page } from '$app/stores';
  import "./app.css";
  let online;

  // $: console.log($page.url);
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