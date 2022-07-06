const toggleButton = document.getElementById("menu");
const menuList = document.getElementById("menu-links");

toggleButton.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

console.log("Rainbow");