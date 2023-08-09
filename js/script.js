
/**************************************************assssmaaaa********************************************************************************/
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction();myFunction() ; };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function  whenlof(){
 alert("lll");
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  let x={jj:"asmaa"};
  const y ="l";

 //document.write( x);
 console.log(x)
  //alert(x); 
  let fo ="asmaa";
// window.alert(fo); 
  //prompt("enter\"");
 // for (let x = 5 ; x >=1;x--){
   // document.write("<br/>");
   // for (let y = 1; y<=10; y++){
     // if(y==x){
     // continue ;}
      //else document.write("*");
    //

 

  Date();
  console.log(x);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}







/*************************************************scrolbar*******************************************************************************/



// When the user scrolls the page, execute myFunction 
//window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


///////////////////////////

