
  const toggle = document.getElementById("themeToggle");
  const themeImg = document.getElementById("themeImg");


  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeImg.src = "sun.png";
    } else {
      themeImg.src = "lune.png";
    }
  });
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    link.classList.remove("active");
    const linkPage = link.getAttribute("href");

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "home.html")
    ) {
      link.classList.add("active");
    }
  });
});
