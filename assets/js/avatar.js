import { avatarData } from "./data.js";

const defaultAvatar = document.querySelector(".avatar-default img");
const uploadInput = document.getElementById("avatar-upload");
const avatarOptionsContainer = document.querySelector(".avatar-options");

// Generate the avatar options
avatarData.forEach((option) => {
  const avatarOption = document.createElement("div");
  avatarOption.classList.add("avatar-option");

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "avatar";
  input.id = `avatar-${option.value}`;
  input.value = option.value;
  input.checked = option.selected;

  const label = document.createElement("label");
  label.htmlFor = `avatar-${option.value}`;

  const img = document.createElement("img");
  img.src = option.src;
  img.alt = option.alt;

  label.appendChild(img);
  avatarOption.appendChild(input);
  avatarOption.appendChild(label);
  avatarOptionsContainer.appendChild(avatarOption);
});

// Add event listener to the avatar options
const avatarOptionInputs = document.querySelectorAll(".avatar-option input");
avatarOptionInputs.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedValue = option.value;
    const selectedSrc = `assets/svg/avatar/avatar-${selectedValue}.svg`;
    defaultAvatar.src = selectedSrc;
    avatarOptionInputs.forEach((option) => {
      option.checked = false;
      option.parentElement.classList.remove("avatar--selected");
    });
    option.checked = true;
    option.parentElement.classList.add("avatar--selected");
  });
});

// Add event listener to the upload input
uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    defaultAvatar.src = reader.result;
    avatarOptionInputs.forEach((option) => {
      option.checked = false;
      option.parentElement.classList.remove("avatar--selected");
    });
  };
});
