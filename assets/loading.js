var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}
function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".myDiv").style.display = "block";
}
