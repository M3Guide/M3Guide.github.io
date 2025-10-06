document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a class="logo" href="index.html">
                    <img src="https://s-ak.kobojo.com/mutants/assets/mobile/hud/common_files/icon_muto.png" alt="MGG Logo">
                    <h1>M<span class="g">3Guide</span></h1>
                </a>
                
                <button class="nav-toggle" aria-label="toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>

                <div class="nav-menu">
                    <a href="index.html"><i class="fas fa-home"></i> Home</a>
                    
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle"><i class="fas fa-wrench"></i> Tools <i class="fas fa-caret-down"></i></a>
                        <div class="dropdown-menu">
                            <a href="statstable.html"><i class="fas fa-table"></i> Stats Table</a>
                            <a href="statscalc.html"><i class="fas fa-calculator"></i> Stats Calculator</a>
                            <a href="breed.html"><i class="fas fa-dna"></i> Breeding Calculator</a>
                            <a href="xp.html"><i class="fas fa-chart-line"></i> XP Calculator</a>
                            <a href="evocalc.html"><i class="fas fa-angle-double-up"></i> Evo Calculator</a>
                            <a href="credcalc.html"><i class="fas fa-coins"></i> Credits Calculator</a>
                            <a href="fightsim.html"><i class="fas fa-fist-raised"></i> Fight Simulator</a>
                        </div>
                    </div>

                    <a href="credits.html"><i class="fas fa-info-circle"></i> Credits</a>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    const toolsDropdownToggle = document.querySelector('.navbar .dropdown-toggle');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('active');
            if (link.closest('.dropdown-menu')) {
                toolsDropdownToggle.classList.add('active');
            }
        }
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu--visible');
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    const dropdown = document.querySelector('.navbar .dropdown');
    const dropdownToggle = document.querySelector('.navbar .dropdown-toggle');
    const dropdownMenu = document.querySelector('.navbar .dropdown-menu');

    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
            dropdown.classList.toggle('is-open');
        });
    }

    window.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdown.classList.remove('is-open');
        }
    });
});
