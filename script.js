const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");
const colorPicker = document.getElementById("colorPicker");



const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");


function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}

function setRGB(r, g, b) {
    red.value = redNum.value = r;
    green.value = greenNum.value = g;
    blue.value = blueNum.value = b;

    updateColor();
}


function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;
    hexValue.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}



// Eventos
colorPicker.addEventListener("input", () => {
    const { r, g, b } = hexToRgb(colorPicker.value);
    setRGB(r, g, b);
});


red.addEventListener("input", () => {
    redNum.value = red.value;
    updateColor();
});

green.addEventListener("input", () => {
    greenNum.value = green.value;
    updateColor();
});

blue.addEventListener("input", () => {
    blueNum.value = blue.value;
    updateColor();
});

redNum.addEventListener("input", () => {
    red.value = redNum.value;
    updateColor();
});

greenNum.addEventListener("input", () => {
    green.value = greenNum.value;
    updateColor();
});

blueNum.addEventListener("input", () => {
    blue.value = blueNum.value;
    updateColor();
});
