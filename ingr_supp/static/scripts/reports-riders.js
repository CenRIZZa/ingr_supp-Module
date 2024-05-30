// SORT BY - DROPDOWN (DELIVERY REPORT)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".deliveryReport-selectMenu");
    const selectBtn = optionMenu.querySelector(".deliveryReport-selectBtn");
    const options = optionMenu.querySelectorAll(".deliveryReport-Option");
    const sBtn_text = optionMenu.querySelector(".deliveryReport-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".deliveryReport-optionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});

// PAGINATION - DROPDOWN (DELIVERY REPORT)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".deliveryReport-paginationDropdown");
    const selectBtn = optionMenu.querySelector(".deliveryReport-pagination-selectBtn");
    const options = optionMenu.querySelectorAll(".deliveryReport-paginationOption");
    const sBtn_text = optionMenu.querySelector(".deliveryReport-pagination-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".deliveryReport-paginationOptionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});

// PAGINATION - DROPDOWN (DELIVERY PERSONNEL)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".deliveryPersonnel-paginationDropdown");
    const selectBtn = optionMenu.querySelector(".deliveryPersonnel-pagination-selectBtn");
    const options = optionMenu.querySelectorAll(".deliveryPersonnel-paginationOption");
    const sBtn_text = optionMenu.querySelector(".deliveryPersonnel-pagination-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".deliveryPersonnel-paginationOptionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});