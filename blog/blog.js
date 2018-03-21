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


// var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
// var handlePost = function( post ){
//     var title = "<h3>" + post.title + "</h3>";
//     var content = "<p>" + post.body + "</p>";
//     var blurb = "<div class='blog-post'>" + title + content + "</div>";
//
//     $( ".content" ).append( blurb );
// }

getPosts.then(
    ( posts ) => posts.forEach( handlePost )
);
