window.onload = function() {
    jQuery.get("html/navBar.html", function(data){
        document.getElementById("navBar").innerHTML=data;
    })
}

function openNav() {
	document.getElementById("mySideNav").className = "sidenav openNav"; 
	}

function closeNav() {
	document.getElementById("mySideNav").className = "sidenav"; 
}