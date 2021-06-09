function toggleDropdown() {
    var navbarToggle = document.getElementById("navbar-toggle");
    
    if(navbarToggle.className === "top-nav"){
       navbarToggle.className += ' responsive';
    }else{
        
        navbarToggle.className = 'top-nav';
    }
}