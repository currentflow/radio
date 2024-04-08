export function dbltap(node, delay = 600) {
	let waiting = false;
	let timer = null;

	function handleTap() {
		if (waiting) {
			clearTimeout(timer);
			node.dispatchEvent(new CustomEvent('dbltap'));
			waiting = false;
			return;
		}
		waiting = true;
		timer = setTimeout(() => {
			// node.dispatchEvent(new CustomEvent('tap')); 
			waiting = false;
		}, delay);
	}
	node.addEventListener('pointerup', handleTap);

	return {
		destroy() {
			node.removeEventListener('pointerup', handleTap);
		}
	};
}

/*
<script>
	import { dbltap } from "./dbltap";
</script>

<button use:dbltap 
  on:dbltap={() => console.log('dbltap')}  
  on:click={() => console.log("click ")}>
  dbltap
</button>
*/