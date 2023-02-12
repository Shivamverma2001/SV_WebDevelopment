class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    hex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
    rgba(a = 1.0) {
        return `rgb(${this.r},${this.g},${this.b},${a})`;
    }
}
const red = new Color(255, 67, 89, "tomato");