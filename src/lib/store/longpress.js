export function longpress(node, duration = 1200) {
	let timer;

	const handlePointerdown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, duration);
	};

	const handlePointerup = () => {
		clearTimeout(timer);
	};

	node.addEventListener('pointerdown', handlePointerdown);
	node.addEventListener('pointerup', handlePointerup);

	return {
		update(newDuration) {
			duration = newDuration;
		},
		destroy() {
			node.removeEventListener('pointerdown', handlePointerdown);
			node.removeEventListener('pointerup', handlePointerup);
		}
	};
}
