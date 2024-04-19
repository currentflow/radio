<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<header>
  <h1>{$page.status}:</h1> 
  <div>{$page.error.message} </div>  
  <a href="{base}/">Home</a>
</header>

<style>
  header {
    grid-row: span 3;
    height: min-content;
    border-radius: 0.5rem;
    align-items: baseline;

    & div { flex: 1; }
  }
</style>