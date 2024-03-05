function debug () {
	strokeWeight(0);
	textAlign(LEFT);
    text ("DEBUG:", 10, height - 3 * 15);
    text ("pixelDensity = " + pixelDensity(), 10, height - 2 * 15);
	text ("displayDensity = " + displayDensity(), 10, height - 1 * 15);
}