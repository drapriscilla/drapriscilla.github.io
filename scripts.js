$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 820);
});

window.addEventListener('scroll', scrollFunction);


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navlogoimg").style.height = "40px";
    document.querySelector(".navbar").style.height = "70px";
  } else {
    document.querySelector(".navlogoimg").style.height = "70px";
    document.querySelector(".navbar").style.height = "100px";
  }
}
