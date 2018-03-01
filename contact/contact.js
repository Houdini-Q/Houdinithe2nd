let contactArray = ["Quintez Martin", "423-394-5187", "mrmartin2016@yahoo.com",]
contactArray[3] = "3123 Lookaway Trail"
contactArray[4] = "Chattanooga, TN"
contactArray[5] = "37406"


function addContent(array){
console.log(array)
$("#contact-array").append("<li>" + array + "</li>");
}

contactArray.forEach(addContent)
