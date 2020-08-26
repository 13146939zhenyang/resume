var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}
function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".mainPage").style.display = "block";
}
