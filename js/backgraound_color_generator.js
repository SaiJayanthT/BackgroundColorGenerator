// Fetching the DOM elements
const input_elements = document.getElementsByTagName('input');
const body = document.body;
const element = document.getElementById("color_data");

// Adding Event listeners
input_elements[0].addEventListener('input', backgroundColorGenerator);
input_elements[1].addEventListener('input', backgroundColorGenerator);

// Background color generator function
function backgroundColorGenerator(){
    body.style.backgroundImage = `linear-gradient(to right, ${input_elements[0].value} , ${input_elements[1].value})`
    element.innerHTML = body.style.backgroundImage;
};