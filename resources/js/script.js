const resizeAlert = function() {
    let pageWidth = window.innerWidth;
        
    if(pageWidth < 473 && !resizeAlert.isRunning){
        alert("Turn your screen sideways for a more pleasant Presence experience.")
        
        resizeAlert.isRunning = true;
    }
};

    window.onresize = resizeAlert;


const navClicker = function(event) {
	let pageLoc = event.target.id; // sets pageLoc to the ID of what was clicked
    if(pageLoc === 'home' || pageLoc === 'logo') { //based on pageLoc, goes to a certain div and sets it to either be seen or not
        document.getElementById('homePage').style.display = 'block';
        document.getElementById('aboutPage').style.display = 'none';
        document.getElementById('helpPage').style.display = 'none';
        document.getElementById('profilePage').style.display = 'none';
    } else if(pageLoc === 'about') {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('aboutPage').style.display = 'block';
        document.getElementById('helpPage').style.display = 'none';
        document.getElementById('profilePage').style.display = 'none';
    } else if(pageLoc === 'help') {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('aboutPage').style.display = 'none';
        document.getElementById('helpPage').style.display = 'block';
        document.getElementById('profilePage').style.display = 'none';
    } else if(pageLoc === 'profile') {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('aboutPage').style.display = 'none';
        document.getElementById('helpPage').style.display = 'none';
        document.getElementById('profilePage').style.display = 'block';
    }
};