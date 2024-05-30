// SORT BY - DROPDOWN (PRODUCT SALES)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".productSales-selectMenu");
    const selectBtn = optionMenu.querySelector(".productSales-selectBtn");
    const options = optionMenu.querySelectorAll(".productSales-Option");
    const sBtn_text = optionMenu.querySelector(".productSales-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".productSales-optionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});

// PAGINATION - DROPDOWN (PRODUCT SALES)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".productSales-paginationDropdown");
    const selectBtn = optionMenu.querySelector(".productSales-pagination-selectBtn");
    const options = optionMenu.querySelectorAll(".productSales-paginationOption");
    const sBtn_text = optionMenu.querySelector(".productSales-pagination-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".productSales-paginationOptionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});

// SORT BY - DROPDOWN (OVERALL SALES)
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".overallSales-selectMenu");
    const selectBtn = optionMenu.querySelector(".overallSales-selectBtn");
    const options = optionMenu.querySelectorAll(".overallSales-Option");
    const sBtn_text = optionMenu.querySelector(".overallSales-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".overallSales-optionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});