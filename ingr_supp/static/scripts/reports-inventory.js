// SORT BY - DROPDOWN (INVENTORY REPORT)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".inventoryReport-selectMenu");
    const selectBtn = optionMenu.querySelector(".inventoryReport-selectBtn");
    const options = optionMenu.querySelectorAll(".inventoryReport-Option");
    const sBtn_text = optionMenu.querySelector(".inventoryReport-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".inventoryReport-optionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});

// PAGINATION - DROPDOWN (INVENTORY REPORT)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".inventoryReport-paginationDropdown");
    const selectBtn = optionMenu.querySelector(".inventoryReport-pagination-selectBtn");
    const options = optionMenu.querySelectorAll(".inventoryReport-paginationOption");
    const sBtn_text = optionMenu.querySelector(".inventoryReport-pagination-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".inventoryReport-paginationOptionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});
