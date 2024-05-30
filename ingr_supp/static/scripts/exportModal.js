// EXPORT MODAL
function toggleModal() {
    var checkbox = document.getElementById('check');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.productSales-Button, .overallSales-Button, .inventoryReport-Button, .deliveryReport-Button, .deliveryPersonnel-Button').forEach(button => {
        button.addEventListener('click', toggleModal);
    });
});

// EXPORT MODAL - DROPDOWN
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".include-selectMenu");
    const selectBtn = optionMenu.querySelector(".include-selectBtn");
    const options = optionMenu.querySelectorAll(".include-Option");
    const sBtn_text = optionMenu.querySelector(".include-sBtn-text");

    selectBtn.addEventListener("click", function() {
        console.log("Button clicked");
        optionMenu.classList.toggle("active");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Option clicked");
            let selectedOption = option.querySelector(".include-optionText").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});