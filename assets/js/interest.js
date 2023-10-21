// map.js

import { pillData } from "./data.js";

function generateInputs() {
  const inputs = document.querySelector(".inputs");
  const selectedPills = new Set();

  if (!inputs) {
    console.error("Could not find .inputs element");
    return;
  }

  // Loop through the pillData array and create HTML elements for each interest
  pillData.forEach((interest) => {
    const input = document.createElement("div");
    input.classList.add("input--pill");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = interest.txt;
    checkbox.name = interest.txt;
    checkbox.value = "interest"; // Add value attribute

    const label = document.createElement("label");
    label.htmlFor = interest.txt;

    const imgDef = document.createElement("img");
    imgDef.src = interest.def;
    imgDef.alt = interest.txt;
    imgDef.classList.add("pill-default");

    const imgHover = document.createElement("img");
    imgHover.src = interest.hover;
    imgHover.alt = interest.txt;
    imgHover.classList.add("pill-hover");
    imgHover.style.display = "none";

    const span = document.createElement("span");
    span.textContent = interest.txt;

    label.appendChild(imgDef);
    label.appendChild(imgHover);
    label.appendChild(span);

    input.appendChild(checkbox);
    input.appendChild(label);

    label.addEventListener("mouseover", () => {
      if (!selectedPills.has(interest.txt)) {
        imgDef.style.display = "none";
        imgHover.style.display = "block";
      }
    });

    label.addEventListener("mouseout", () => {
      if (!selectedPills.has(interest.txt)) {
        imgDef.style.display = "block";
        imgHover.style.display = "none";
      }
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        if (selectedPills.size >= 5) {
          checkbox.checked = false;
          return;
        }
        selectedPills.add(interest.txt);
        imgDef.style.display = "none";
        imgHover.style.display = "block";
        label.classList.remove("pill-hover");
        input.classList.add("input--pill-selected");
        if (selectedPills.size === 5) {
          inputs.classList.add("input--pill-max");
        }
      } else {
        selectedPills.delete(interest.txt);
        if (!label.classList.contains("pill-hover")) {
          imgDef.style.display = "none";
          imgHover.style.display = "block";
        }
        label.classList.add("pill-hover");
        input.classList.remove("input--pill-selected");
      }
    });

    inputs.appendChild(input);
  });
}

generateInputs();
