<script>
  import { round } from "$lib/store";
  let { 
    value=$bindable(),  
    min = 0, 
    max = 1, 
    step = 0.01,
    ...props} = $props();
</script>

<input class="js" type='range'
  {min} {max} {step} {...props}
  bind:value={value} title="volume: {value}">

<style>
  [type="range"] {
    --thumb-diameter: 1.5em;
    --thumb-radius: 50%;
    --thumb-shadow: drop-shadow(0.0625rem 0.0625rem 0 hsl(0 0 0));
    -webkit-appearance: none;
    appearance: none;
    font-size: 1em;

    height: 1em;
    width: 100%;
    max-width: 100%;
    min-width: 75px; 

    background: var(--bg);
    border-radius: 0.5em;
    border: none;
    filter: drop-shadow(0.0625rem 0.125rem 0 hsl(0 0 0));
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

    background: var(--fg);
    filter:  var(--thumb-shadow);
    cursor: pointer;   
  }
  [type=range]::-webkit-slider-thumb:hover {
    background:var(--fg); 
  }
  [type=range]::-webkit-slider-thumb:active {
    background:var(--fg); 
  }
  [type=range]::-moz-range-thumb {
    appearance: none;

    height: var(--thumb-diameter);
    width: var(--thumb-diameter);

    border: none;
    border-radius: var(--thumb-radius);
    background: var(--fg);
    filter: var(--thumb-shadow);
    cursor: pointer;    
  }
  [type=range]::-moz-range-thumb:hover {
    background: var(--fg); 
  }
  [type=range]::-moz-range-thumb:active {
    background: var(--fg); 
  }  
</style>