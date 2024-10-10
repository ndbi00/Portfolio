'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// **Portfolio filtering logic**
const filterBtnPortfolio = document.querySelectorAll("[data-filter-btn]");
const filterItemsPortfolio = document.querySelectorAll("[data-filter-item]");

const filterFuncPortfolio = function (selectedValue) {
  for (let i = 0; i < filterItemsPortfolio.length; i++) {
    if (selectedValue === "all" || selectedValue === filterItemsPortfolio[i].dataset.category) {
      filterItemsPortfolio[i].classList.add("active");
    } else {
      filterItemsPortfolio[i].classList.remove("active");
    }
  }
};

// Add event listeners for Portfolio filter buttons
filterBtnPortfolio.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFuncPortfolio(selectedValue);
    filterBtnPortfolio.forEach(button => button.classList.remove("active"));
    this.classList.add("active");
  });
});

// **Misc filtering logic**
const filterBtnMisc = document.querySelectorAll("[data-misc-filter-btn]");
const filterItemsMisc = document.querySelectorAll("[data-misc-filter-item]");

const filterFuncMisc = function (selectedValue) {
  for (let i = 0; i < filterItemsMisc.length; i++) {
    if (selectedValue === "all" || selectedValue === filterItemsMisc[i].dataset.category) {
      filterItemsMisc[i].classList.add("active");
    } else {
      filterItemsMisc[i].classList.remove("active");
    }
  }
};

// Add event listeners for Misc filter buttons
filterBtnMisc.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFuncMisc(selectedValue);
    filterBtnMisc.forEach(button => button.classList.remove("active"));
    this.classList.add("active");
  });
});

// Portfolio items (if needed)
const portfolioItems = document.querySelectorAll(".portfolio-item");
portfolioItems.forEach(item => {
  item.addEventListener("click", function () {
    console.log("Portfolio item clicked:", this);
    // Add your specific functionality here
  });
});

// Misc items (if needed)
const miscItems = document.querySelectorAll(".misc-item");
miscItems.forEach(item => {
  item.addEventListener("click", function () {
    console.log("Misc item clicked:", this);
    // Add your specific functionality here
  });
});

// Misc custom select functionality
const selectMisc = document.querySelector("[data-misc-select]");
const selectItemsMisc = document.querySelectorAll("[data-misc-select-item]");
const selectValueMisc = document.querySelector("[data-misc-selecct-value]");

selectMisc.addEventListener("click", function () {
  elementToggleFunc(this); // Toggle dropdown visibility
});

// Add event listeners to all select items in Misc
selectItemsMisc.forEach(item => {
  item.addEventListener("click", function () {
    selectValueMisc.innerText = this.innerText; // Update the select value text
    elementToggleFunc(selectMisc); // Hide the dropdown after selection
    filterFuncMisc(this.innerText.toLowerCase()); // Call the Misc filter function
  });
});


// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFuncPortfolio(selectedValue); // This calls the portfolio filter function, change if needed for Misc
  });
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all navigation links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
