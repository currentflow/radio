<script>
  import "./app.css";
  // let title = "Home";
  // const routes = [
  //   { name: "Home", path: "/" },
  //   { name: "About", path: "/about" },
  // ];
</script>

<!-- <header class="">
  <div class="flex">
    <div class="title">
      <a href="/">{title}</a>
    </div>
    <nav>
      {#each routes as route}
      <div class="route">
        <a href={route.path}>{route.name}</a>
      </div>
      {/each}
    </nav>
  </div>
</header> -->

<main>
  <slot />
  <!-- <div class="router"><slot /></div> -->
</main>

<style>
  /* header {
    border-bottom: 1px solid #ccc;
    & .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0 1rem;
      padding: 0.5rem 2rem;
      max-width: var(--max-width);
      margin: 0 auto;
    }
    & a {  color: inherit;
       &:not(:hover:not(:active)) {
        text-decoration: none;
      }
    }
    & nav {
      display: flex;
      align-items: baseline;
      gap: 0 1rem;
    }
  }  */
  /* header */

  main {
    /* padding: 0.5rem 2rem; 
    max-width: var(--max-width);
    margin: 0 auto; */
    height: 100%;
    /* background: hsl(210 20% 10%); */
    
  }
</style>