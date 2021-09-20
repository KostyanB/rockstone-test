// use request animation frame
export function animate({ duration, draw, timing }) {

	const start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) {
			timeFraction = 1;
		}

		const progress = timing(timeFraction);

		draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}