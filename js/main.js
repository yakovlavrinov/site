(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  };
})();

//burger handler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();

const modalBtns = document.querySelectorAll("._modal-open");
const modals = document.querySelectorAll("._modal");

const body = document.body;

function openModal(elem) {
  elem.classList.add("_active");
  body.classList.add("_locked");
}

function closeModal(e) {
  if (
    e.target.classList.contains("modal-close") ||
    e.target.closest(".modal-close") ||
    e.target.classList.contains("modal-bg")
  ) {
    e.target.closest("._modal").classList.remove("_active");
    body.classList.remove("_locked");
  }
}

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = e.target.dataset.modalOpen;

    modals.forEach((modal) => {
      if (
        modal.dataset.modal == data ||
        modal.dataset.modal ==
          e.target.closest("._modal-open").dataset.modalOpen
      ) {
        openModal(modal);
      }
    });
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => closeModal(e));
});

window.addEventListener("keydown", (e) => {
  modals.forEach((modal) => {
    if (e.key === "Escape" && modal.classList.contains("_active")) {
      modal.classList.remove("_active");
      body.classList.remove("_locked");
    }
  });
});
