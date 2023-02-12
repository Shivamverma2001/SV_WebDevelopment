function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`;
}
Color.prototype.hex = function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
Color.prototype.rgba = function rgb(a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b},${a})`;
}
const color1 = new Color(255, 40, 100);