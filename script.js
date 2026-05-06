const reviewTabs = document.querySelectorAll(".review-tab");
const reviewPanels = document.querySelectorAll(".review-panel");
const themeToggle = document.querySelector(".theme-toggle");

reviewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedReview = tab.dataset.review;

    reviewTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    reviewPanels.forEach((panel) => {
      const isSelected = panel.id === selectedReview;
      panel.classList.toggle("is-active", isSelected);
      panel.hidden = !isSelected;
    });
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
