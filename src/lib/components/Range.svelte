<script>
  export let min = 0;
  export let max = 1;
  export let step = 0.01;
  export let value = 0.5;
  export let maxWidth = "100%";
</script>

<input class="js" type='range' 
  {min} {max} {step} on:change
  style:max-width={maxWidth} 
  bind:value={value} >

<style>
  [type="range"] {
    --thumb-diameter: 1.5em;
    --thumb-radius: 50%;
    --thumb-shadow: drop-shadow(0.0625rem 0.0625rem 0 hsl(0 0% 0%));
    -webkit-appearance: none;
    appearance: none;
    font-size: 1rem;

    height: 1rem;
    width: 100%;
    min-width: 100px; 

    background: var(--background-color);
    border-radius: 0.5rem;
    border: none;
    /* box-shadow:inset 4px 4px black; */
    filter: drop-shadow(0.0625rem 0.125rem 0 hsl(0 0% 0%));
    overflow: visible;
  }

  [type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    


    height: var(--thumb-diameter);
    width: var(--thumb-diameter);

    border: none;
    border-radius: var(--thumb-radius);

    background: var(--text-color);
    filter:  var(--thumb-shadow);
    cursor: pointer;   
  }
  [type=range]::-webkit-slider-thumb:hover {
    background:var(--text-color); 
  }
  [type=range]::-webkit-slider-thumb:active {
    background:var(--text-color); 
  }
  [type=range]::-moz-range-thumb {
    appearance: none;

    height: var(--thumb-diameter);
    width: var(--thumb-diameter);

    border: none;
    border-radius: var(--thumb-radius);
    background: var(--text-color);
    filter: var(--thumb-shadow);
    cursor: pointer;    
  }
  [type=range]::-moz-range-thumb:hover {
    background: var(--text-color); 
  }
  [type=range]::-moz-range-thumb:active {
    background: var(--text-color); 
  }  

</style>