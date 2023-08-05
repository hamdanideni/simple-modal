// select element
const openModalEl = document.querySelectorAll(".open-modal");
const modalContent = document.querySelector(".modal-content");
const closeModalEl = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");

// function open modal
const openModal = function () {
  modalContent.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
};

// function close modal
const closeModal = function () {
  modalContent.classList.add("hidden");
  modalOverlay.classList.add("hidden");
};

// click open modal
for (let i = 0; i < openModalEl.length; i++) {
  openModalEl[i].addEventListener("click", openModal);
}

// close modal button
closeModalEl.addEventListener("click", closeModal);

// close modal by click overlay
modalOverlay.addEventListener("click", closeModal);

// close modal by click escape
document.addEventListener("keydown", function (e) {
  if (!modalContent.classList.contains("hidden") && e.key === "Escape") {
    closeModal();
  }
});
