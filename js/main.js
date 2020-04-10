//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// end slider

//tabs
var tab;
var tabContent;

window.onload = function() {
  tabContent = document.getElementsByClassName("tabContent");
  tab = document.getElementsByClassName("tab");
  hideTabsContent(1);
  showTabsContent(1);
  console.log("onload");
};
function hideTabsContent(a) {
  for (var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("whiteBorder");
  }
  console.log("hideTabsContent");
}
document.getElementById('tabs').onclick = function(event) {
  var target = event.target;
  if (target.className == "tab" || target.parentElement.className == "tab") {
    for (var j = 0; j < tab.length; j++) {
      if (target.innerText == tab[j].innerText ||
        target.parentElement.innerText == tab[j].innerText) {
        showTabsContent(j);
        break;
      }
    }
  }
  console.log('onclick');  
};
function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("whiteBorder");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
  console.log('showTabsContent'); 
}
//end tabs

//footer slider
var fslideIndex = 1;
fshowSlides(fslideIndex);

function fplusSlides(n) {
  fshowSlides((fslideIndex += n));
}

function fcurrentSlide(n) {
  fshowSlides((fslideIndex = n));
}

function fshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fSlides");

  if (n > slides.length) {
    fslideIndex = 1;
  }
  if (n < 1) {
    fslideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[fslideIndex - 1].style.display = "block";
}
// end slider