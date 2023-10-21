import { genderData } from "./data.js";
import { deptData } from "./data.js";
import { courseData } from "./data.js";
import { majorData } from "./data.js";

const genderSelect = document.getElementById("student_gender");
const deptSelect = document.getElementById("student_dept");
const courseSelect = document.getElementById("student_course");
const majorSelect = document.getElementById("student_major");

// Add options to gender select tag
if (genderSelect) {
  genderData.forEach((gender) => {
    console.log("map.js loaded");
    const { value, label } = gender;
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.textContent = label;
    genderSelect.appendChild(optionElement);
  });
} else {
  console.error("Could not find gender select element");
}

// Add options to department select tag
deptData.forEach((dept) => {
  const { value, label } = dept;
  const optionElement = document.createElement("option");
  optionElement.value = value;
  optionElement.textContent = label;
  deptSelect.appendChild(optionElement);
});

// Add options to course select tag
courseData.forEach((course) => {
  const { value, label } = course;
  const optionElement = document.createElement("option");
  optionElement.value = value;
  optionElement.textContent = label;
  courseSelect.appendChild(optionElement);
});

// Add options to major select tag
majorData.forEach((major) => {
  const { value, label } = major;
  const optionElement = document.createElement("option");
  optionElement.value = value;
  optionElement.textContent = label;
  majorSelect.appendChild(optionElement);
});
