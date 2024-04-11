<script>
	import { page } from '$app/stores';
</script>

<header>
  <h1>{$page.status}:</h1> 
  <div>{$page.error.message}</div>  
  <a href="/">Home</a>
</header>

<style>
  header {
    grid-row: span 3;
    height: min-content;
    border-radius: 0.5rem;

    & div { flex: 1; }
  }
</style>