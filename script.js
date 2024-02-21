document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navigation a");

  links.forEach((link) => {
    const line = document.createElement("div");

    line.classList.add("underline");

    link.appendChild(line);

    link.addEventListener("mouseenter", () => {
      line.style.width = `${link.offsetWidth}px`;

      line.style.opacity = 1;
    });

    link.addEventListener("mouseleave", () => {
      line.style.width = "0";
      line.style.opacity = 0;
    });
  });

  const darkModeToggle = document.getElementById("darkModeToggle");
  const modeIcon = document.getElementById("modeIcon");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      modeIcon.src = "Images/light.svg";
      modeIcon.alt = "Light Mode Icon";
    } else {
      modeIcon.src = "Images/dark.svg";
      modeIcon.alt = "Dark Mode Icon";
    }
  });
});
