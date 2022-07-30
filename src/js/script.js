window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu_btn");
  const navMenu = document.querySelector("#menu");
  const logo = document.querySelector(".nav_logo");
  const topNavSwitch = document.querySelector(".topNavSwitch");
  const scrollDown = document.querySelector(".scrollDown");
  const main = document.querySelector("main");

  const save = topNavSwitch.innerHTML;

  menuBtn.addEventListener("click", () => {
    if (!menuBtn.classList.contains("open")) {
      menuBtn.classList.add("open");
      navMenu.classList.add("active_nav");
      topNavSwitch.innerHTML = "";
      topNavSwitch.insertAdjacentHTML("afterbegin", logo.innerHTML);
    } else {
      menuBtn.classList.remove("open");
      navMenu.removeAttribute("class");
      topNavSwitch.innerHTML = "";
      topNavSwitch.insertAdjacentHTML("afterbegin", save);
    }
  });

  try {
    scrollDown.addEventListener("click", (e) => {
      window.scrollTo({
        top: main.offsetTop - 105,
        behavior: "smooth",
      });
      // window.addEventListener("scroll", () => {
      // 	window.scrollY < main.offsetTop - 80 ?
      // 	main.removeAttribute("style") :
      // 	main.style.cssText = "padding-top: 100px";
      // });
    });
  } catch {}

  try {
    const item = document.querySelectorAll(".item");
    const itemTitle = document.querySelectorAll(".item-footer h3 a");

    item.forEach(item => {
      item.setAttribute("title",
      item.children[1]
      .children[0]
      .textContent.trim())
    });

    itemTitle.forEach((title) => {
    
      if (title.textContent.length >= 21) {
        title.textContent = title.textContent.slice(0, 21) + "...";
      }
    });
   
  
  } catch {}
});
