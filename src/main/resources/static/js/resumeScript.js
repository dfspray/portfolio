function openEngineeringType(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function focusChange(selection) {
	console.log(selection);
	if (selection == "software") {
		var class1 = document.getElementsByClassName("software");
		for (var i = 0; i < class1.length; i++) {
			  class1[i].style.display = "";
			}
		var class2 = document.getElementsByClassName("mechanical");
		for (var i = 0; i < class2.length; i++) {
			  class2[i].style.display = "none";
			}
	} else if (selection == "mechanical") {
		var class1 = document.getElementsByClassName("software");
		for (var i = 0; i < class1.length; i++) {
			  class1[i].style.display = "none";
			}
		var class2 = document.getElementsByClassName("mechanical");
		for (var i = 0; i < class2.length; i++) {
			  class2[i].style.display = "";
			}
	} else if (selection == "all"){
		var class1 = document.getElementsByClassName("software");
		for (var i = 0; i < class1.length; i++) {
			  class1[i].style = "";
			}
		var class2 = document.getElementsByClassName("mechanical");
		for (var i = 0; i < class2.length; i++) {
			  class2[i].style = "";
			}
	}
}