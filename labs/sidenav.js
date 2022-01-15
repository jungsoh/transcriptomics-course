// Open side navigation column, hide contents triple bar,
// and show links to sections
function openNav() {
  // Set width of side navigation and left margin of main content
  var nav = document.getElementById("mySidenav");
  nav.style.width = "210px";
  document.getElementById("main").style.marginLeft = "210px";
  document.getElementById("contents").style.display= "none";

  // Grab elements of "sectitle" class and populate links using them 
  var sections = document.getElementsByClassName("sectitle");
  var links = document.createElement("ol");
  links.setAttribute("id", "toc");
  for (var i=0; i<sections.length; i++) {
    var link = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "#"+sections[i].getAttribute("id"));
    anchor.innerHTML = sections[i].innerHTML;
    link.appendChild(anchor);
    links.appendChild(link);
  }
  nav.appendChild(links);
}

// Close side navigation column and show contents triple bars
function closeNav() {
  var nav = document.getElementById("mySidenav");
  nav.style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("contents").style.display= "block";
  nav.removeChild(document.getElementById("toc"));
}
