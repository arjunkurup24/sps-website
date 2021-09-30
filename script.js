
// When the user scrolls down 20px from the top of the document, show the button
document.addEventListener("scroll",()=>{

  var rootElement=document.documentElement;

  if(rootElement.scrollTop >= 300){
    // mybutton.style.display="block";
    console.log("hello")
   document.getElementById("myBtn").style.display="block"

  }
  else{
    document.getElementById("myBtn").style.display="none"
 
  }
  console.log(rootElement.scrollTop)
 
})

// console.log("hello")
// window.onscroll = function() {scrollFunction()};

// console.log(window.onscroll)

// function scrollFunction() {
//   if (document.body.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


function openVideo(image,video){

    document.getElementById(image).style.display="none"
    document.getElementById(video).style.display="block"

    var video1= document.getElementById(video)
    video1.src+="?autoplay=1"
    
    


}
function openVideo2(){
    document.getElementById("image1").style.display="none"
    var video2=document.getElementById("vide1")
    video2.style.display="block"
    // video2.src+="autoplay=1"


}
function openVideo3(){
    document.getElementById("image2").style.display="none"
    var video3=document.getElementById("vide2")
    video3.style.display="block"
    // video3.src+="autoplay=1"

}

function openVideo4(){
    document.getElementById("image3").style.display="none"
    var video4=document.getElementById("vide3")
    video4.style.display="block"
    // video4.src+="autoplay=1"


}
function openVideo5(){
    document.getElementById("image4").style.display="none"
    var video5=document.getElementById("vide4")
    video5.style.display="block"
    // video5.src+="autoplay=1"


}


//Get the button:

