        const dropdownTriggerResources = document.getElementById('dropdown-trig-resources');
        const dropdownMenuResources = document.getElementById('dropdown-resources');
        
        // Dropdown Products
        const dropdownTriggerProducts = document.getElementById('dropdown-trig-products');
        const dropdownMenuProducts = document.getElementById('dropdown-products');

        
        
        // Fungsi untuk toggle dropdown
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
        
        // Tambahkan event listener untuk menyembunyikan dropdown saat klik di luar dropdown
        document.addEventListener('click', function(event) {
            if (!dropdownTriggerResources.contains(event.target) && !dropdownMenuResources.contains(event.target)) {
                dropdownMenuResources.classList.add('hidden');
            }
            if (!dropdownTriggerProducts.contains(event.target) && !dropdownMenuProducts.contains(event.target)) {
                dropdownMenuProducts.classList.add('hidden');
            }
        });
        
        // Fungsi untuk menambahkan event listener ke tautan dropdown
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
                        // Sembunyikan dropdown jika tautan lainnya diklik
                        menu.classList.add('hidden');
                    }
                });
            });
        }
        
        // Panggil fungsi untuk resources
        toggleDropdown(dropdownTriggerResources, dropdownMenuResources);
        addDropdownLinksEvent(dropdownMenuResources);
        
        // Panggil fungsi untuk products
        toggleDropdown(dropdownTriggerProducts, dropdownMenuProducts);
        addDropdownLinksEvent(dropdownMenuProducts);