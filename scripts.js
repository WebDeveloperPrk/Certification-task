document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main_nav');
    const body = document.body;
    
    
    if (!burgerMenu || !mainNav) return;
    
    
    function closeMenu() {
        burgerMenu.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('menu-open');
        
        
        document.querySelectorAll('.has_dpordouwn').forEach(item => {
            item.classList.remove('active');
        });
    }
    
    
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        burgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
  
    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', function() {
            
            if (!this.closest('.has_dpordouwn') && window.innerWidth <= 767) {
                closeMenu();
            }
        });
    });
    
    
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                closeMenu();
            }
        });
    });
    
    
    document.querySelectorAll('.has_dpordouwn .nav_link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.closest('.has_dpordouwn');
                if (parent) {
                    
                    document.querySelectorAll('.has_dpordouwn').forEach(item => {
                        if (item !== parent) {
                            item.classList.remove('active');
                        }
                    });
                    
                    
                    parent.classList.toggle('active');
                }
            }
        });
    });
    
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 767) {
            if (!mainNav.contains(e.target) && !burgerMenu.contains(e.target)) {
                closeMenu();
            }
        }
    });
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && window.innerWidth <= 767) {
            closeMenu();
        }
    });
    
   
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            closeMenu();
        }
    });
});