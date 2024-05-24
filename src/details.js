const dropdownTriggerResources = document.getElementById('dropdown-trig-resources');
const dropdownMenuResources = document.getElementById('dropdown-resources');

const dropdownTriggerProducts = document.getElementById('dropdown-trig-products');
const dropdownMenuProducts = document.getElementById('dropdown-products');


function toggleDropdown(trigger, menu) {
    trigger.addEventListener('click', function() {
        const isOpen = menu.classList.contains('hidden');
        if (isOpen) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
}

document.addEventListener('click', function(event) {
    if (!dropdownTriggerResources.contains(event.target) && !dropdownMenuResources.contains(event.target)) {
        dropdownMenuResources.classList.add('hidden');
    }
    if (!dropdownTriggerProducts.contains(event.target) && !dropdownMenuProducts.contains(event.target)) {
        dropdownMenuProducts.classList.add('hidden');
    }
});

function addDropdownLinksEvent(menu) {
    const dropdownLinks = menu.querySelectorAll('a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (event.target.href.includes('#mentor')) {
                window.location.href = '#mentor';
            }
            if (event.target.href.includes('#fasilitas')) {
                window.location.href = '#fasilitas';
            }
            if (event.target.href.includes('#materi')) {
                window.location.href = '#materi';
            }
            if (event.target.href.includes('#WebDev')) {
                window.location.href = '#WebDev';
            }
            if (event.target.href.includes('#Excel')) {
                window.location.href = '#Excel';
            }
            if (event.target.href.includes('#Marketing')) {
                window.location.href = '#Marketing';
            }
            if (event.target.href.includes('#Office')) {
                window.location.href = '#Office';
            }
            if (event.target.href.includes('#iot')) {
                window.location.href = '#iot';
            }
            if (event.target.href.includes('#DigitalContent')) {
                window.location.href = '#DigitalContent';
            }
            if (event.target.href.includes('#price')) {
                window.location.href = '#price';
            }
            else {
                menu.classList.add('hidden');
            }
        });
    });
}

toggleDropdown(dropdownTriggerResources, dropdownMenuResources);
addDropdownLinksEvent(dropdownMenuResources);

toggleDropdown(dropdownTriggerProducts, dropdownMenuProducts);
addDropdownLinksEvent(dropdownMenuProducts);

