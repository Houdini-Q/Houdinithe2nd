let contactArray = ["Quintez Martin", "423-394-5187", "mrmartin2016@yahoo.com",]
contactArray[3] = "3123 Lookaway Trail"
contactArray[4] = "Chattanooga, TN"
contactArray[5] = "37406"


function addContent(array){
console.log(array)
$("#contact-array").append("<li>" + array + "</li>");
}

contactArray.forEach(addContent)

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
