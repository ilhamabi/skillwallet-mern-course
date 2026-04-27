// Subtask 4.1. Access DOM Elements
const display = document.querySelector('#display');
const keyDisplay = document.querySelector('#key-display');
const btn = document.querySelector('#btn');
const input = document.querySelector('#input-field');
const form = document.querySelector('#demo-form');
const hoverZone = document.querySelector('#hover-zone');

// Subtask 4.2. Implement click Event
btn.onclick = () => display.innerText = "Button Clicked!";

// Subtask 4.3. Implement input and change Events
input.oninput = (e) => display.innerText = "Typing: " + e.target.value;

// Subtask 4.4. Implement submit Event
form.onsubmit = (e) => {
    e.preventDefault();
    display.innerText = "Form Submitted!";
};

// Subtask 4.5. Implement keyup Event
document.onkeyup = (e) => keyDisplay.innerText = "Key: " + e.key;

// Subtask 4.6. Implement mouseover and mouseout Events
hoverZone.onmouseover = () => hoverZone.style.background = "yellow";
hoverZone.onmouseout = () => hoverZone.style.background = "white";

// 4.7 Focus & Blur
input.onfocus = () => {
    input.style.backgroundColor = "#ffffff";
};

// Subtask 4.7. Implement focus and blur Events
input.onblur = () => {
    input.style.backgroundColor = "#fbff00";
};