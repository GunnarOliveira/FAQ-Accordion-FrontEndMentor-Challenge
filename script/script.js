function activeTabs() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add("active");
    accordionList[0].children[0].setAttribute(
      "src",
      "./assets/images/icon-minus.svg",
    );
    function accordionActive() {
      const dd = this.nextElementSibling;
      dd.classList.toggle("active");
      if (dd.classList.contains("active")) {
        this.children[0].setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        this.children[0].setAttribute("src", "./assets/images/icon-plus.svg");
      }
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", accordionActive);
    });
  }
}
activeTabs();
