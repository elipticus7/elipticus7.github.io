

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
$(".lnk").click(function(){modal.style.display = "block"; hrf= $(this).attr("href"); });
    

// Get the <span> element that closes the modal
$(".close").click(function(){modal.style.display = "none"; location.reload(); });


var expand = document.getElementsByClassName("expand")[0];


expand.onclick = () => {
window.open(hrf, "_blank");
modal.style.display = "none";
location.reload();
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 



//----------------------------------------------



    
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1900, 'swing', function () {
          window.location.hash = target;
      });
  });
});




//----------------------------------------------








































