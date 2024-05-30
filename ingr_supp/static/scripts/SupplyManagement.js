document.addEventListener('DOMContentLoaded', () => {
    // toggle supplies and ingredients tables
    const suppliesTable = document.getElementById('supplies-table');
    const ingredientsTable = document.getElementById('ingredients-table');
    const showSuppliesBtn = document.getElementById('show-supplies');
    const showIngredientsBtn = document.getElementById('show-ingredients');

    if (showSuppliesBtn && showIngredientsBtn && suppliesTable && ingredientsTable) {
        showSuppliesBtn.addEventListener('click', () => {
            suppliesTable.style.display = 'block';
            ingredientsTable.style.display = 'none';
            showSuppliesBtn.classList.add('active');
            showIngredientsBtn.classList.remove('active');
        });

        showIngredientsBtn.addEventListener('click', () => {
            suppliesTable.style.display = 'none';
            ingredientsTable.style.display = 'block';
            showIngredientsBtn.classList.add('active');
            showSuppliesBtn.classList.remove('active');
        });
    }

    // toggle row status
    const statusToggles = document.querySelectorAll('.status-toggle input[type="checkbox"]');
    statusToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                row.classList.add('inactive-row');
                row.querySelectorAll('button').forEach(button => button.disabled = true);
            } else {
                row.classList.remove('inactive-row');
                row.querySelectorAll('button').forEach(button => button.disabled = false);
            }
        });
    });

    function sortTableByColumn(table, column, asc) {
        const dirModifier = asc ? 1 : -1;
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        const sortedRows = rows.sort((a, b) => {
            const aVal = a.cells[column].textContent.trim().toLowerCase();
            const bVal = b.cells[column].textContent.trim().toLowerCase();
            return aVal > bVal ? dirModifier : -dirModifier;
        });

        tbody.innerHTML = ''; 
        tbody.append(...sortedRows); 
    }

    function toggleSortDirection(sortIcon, table, column) {
        let asc = true;
        sortIcon.addEventListener('click', () => {
            asc = !asc;
            sortTableByColumn(table, column, asc);
            sortIcon.classList.toggle('asc', asc);
        });
    }

    const sortIcons = document.querySelectorAll('.sort-icon');
    sortIcons.forEach((icon, index) => {
        const table = icon.closest('table');
        toggleSortDirection(icon, table, index);
    });

    // add supply overlay
    function toggleAddSupplyOverlay() {
        const overlay = document.getElementById('add-supply-overlay');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    const addSupplyBtn = document.getElementById('add-supply');
    if (addSupplyBtn) {
        addSupplyBtn.addEventListener('click', toggleAddSupplyOverlay);
    }

    const closeAddSupplyOverlayBtn = document.getElementById('close-add-supply-overlay');
    if (closeAddSupplyOverlayBtn) {
        closeAddSupplyOverlayBtn.addEventListener('click', toggleAddSupplyOverlay);
    }

    const openAddSupplyOverlayBtn = document.getElementById('open-add-supply-overlay');
    if (openAddSupplyOverlayBtn) {
        openAddSupplyOverlayBtn.addEventListener('click', function () {
            const overlay = document.getElementById('add-supply-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
            }
        });
    }

    // add ingredient overlay
    function toggleAddIngredientOverlay() {
        const overlay = document.getElementById('add-ingredients-overlay');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    const addIngredientBtn = document.getElementById('add-ingredients');
    if (addIngredientBtn) {
        addIngredientBtn.addEventListener('click', toggleAddIngredientOverlay);
    }

    const closeAddIngredientOverlayBtn = document.getElementById('close-add-ingredients-overlay');
    if (closeAddIngredientOverlayBtn) {
        closeAddIngredientOverlayBtn.addEventListener('click', toggleAddIngredientOverlay);
    }

    const openAddIngredientOverlayBtn = document.getElementById('open-add-ingredients-overlay');
    if (openAddIngredientOverlayBtn) {
        openAddIngredientOverlayBtn.addEventListener('click', function () {
            const overlay = document.getElementById('add-ingredients-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
            }
        });
    }

    // view supply overlay
    function toggleViewSupplyOverlay() {
        const overlay = document.getElementById('view-supply-overlay');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    const viewSupplyBtn = document.getElementById('view-supply');
    if (viewSupplyBtn) {
        viewSupplyBtn.addEventListener('click', toggleViewSupplyOverlay);
    }

    const closeViewSupplyOverlayBtn = document.getElementById('close-view-supply-overlay');
    if (closeViewSupplyOverlayBtn) {
        closeViewSupplyOverlayBtn.addEventListener('click', toggleViewSupplyOverlay);
    }

    const openViewSupplyOverlayBtn = document.getElementById('open-view-supply-overlay');
    if (openViewSupplyOverlayBtn) {
        openViewSupplyOverlayBtn.addEventListener('click', function () {
            const overlay = document.getElementById('view-supply-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
            }
        });
    }

    // view ingredient overlay
    function toggleViewIngredientOverlay() {
        const overlay = document.getElementById('view-ingredient-overlay');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    const viewIngredientBtn = document.getElementById('view-ingredient');
    if (viewIngredientBtn) {
        viewIngredientBtn.addEventListener('click', toggleViewIngredientOverlay);
    }

    const closeViewIngredientOverlayBtn = document.getElementById('close-view-ingredient-overlay');
    if (closeViewIngredientOverlayBtn) {
        closeViewIngredientOverlayBtn.addEventListener('click', toggleViewIngredientOverlay);
    }

    const openViewIngredientOverlayBtn = document.getElementById('open-view-ingredient-overlay');
    if (openViewIngredientOverlayBtn) {
        openViewIngredientOverlayBtn.addEventListener('click', function () {
            const overlay = document.getElementById('view-ingredient-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
            }
        });
    }

    // edit supply overlay
    function toggleEditSupplyOverlay() {
        const overlay = document.getElementById('edit-supply-overlay');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    const editSupplyButton = document.getElementById('edit-supply');
    if (editSupplyButton) {
        editSupplyButton.addEventListener('click', toggleEditSupplyOverlay);
    }

    const closeEditSupplyOverlayButton = document.getElementById('close-edit-supply-overlay');
    if (closeEditSupplyOverlayButton) {
        closeEditSupplyOverlayButton.addEventListener('click', toggleEditSupplyOverlay);
    }

    const saveSupplyChangesButton = document.getElementById('save-supply');
    if (saveSupplyChangesButton) {
        saveSupplyChangesButton.addEventListener('click', function() {
            toggleEditSupplyOverlay();
        });
    }

    // edit ingredient overlay
    function toggleEditIngredientOverlay() {
        const overlay = document.getElementById('edit-ingredient-overlay');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    const editIngredientButton = document.getElementById('edit-ingredient');
    if (editIngredientButton) {
        editIngredientButton.addEventListener('click', toggleEditIngredientOverlay);
    }

    const closeEditIngredientOverlayButton = document.getElementById('close-edit-ingredient-overlay');
    if (closeEditIngredientOverlayButton) {
        closeEditIngredientOverlayButton.addEventListener('click', toggleEditIngredientOverlay);
    }

    const saveIngredientChangesButton = document.getElementById('save-ingredient');
    if (saveIngredientChangesButton) {
        saveIngredientChangesButton.addEventListener('click', function() {
            toggleEditIngredientOverlay();
        });
    }
});
