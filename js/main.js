//*input-fields validation part
$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});
$("#address-details").validate(
    {
        rules: {
           city: {
                required: true,
            },
            street: {
                required: true,
                email: true
            },
            building: {
                required: true,
                minlength: 2
            },

        },
        messages: {
            city: "Please enter your city name",
            street: "Please enter your street name",
            building: "Please enter your building name/number",
        }
    }
);
//modal
$(".green-application").click(function () {
    $(".modal").addClass("open");
    $("body").toggleClass("body-active");
});
$(".modal").click(function (event) {
    $(".modal").removeClass("open");
    $("body").toggleClass("body-active");
});
$(".modal-close").click(function (event) {
    $(".modal").removeClass("open");
    $("body").toggleClass("body-active");
});
$(".modal-content").click(function (event) {
    event.stopPropagation();

});
//*for index.html's interest-item part
//   function turnGreen() {
//       for (let i = 0; i < box.length; i++) {
//           box[i].classList.remove("bu");
//       }
//       this.classList.add("bu");
//   }
//   let box = document.querySelectorAll(".interest-item");
//   for (let i = 0; i < box.length ; i++) {
//       box[i].onclick = turnGreen;
//   }


$(document).on("click",".interest-item", function () {
    $(".interest-item").removeClass("bu");
    $(this).addClass("bu");

    let dataId = $(this).data("id");
    // $('.form-container').

    if (!$('.'+dataId).hasClass("active-form")){
        $('.form-container').removeClass("active-form");
        $('.'+dataId).addClass("active-form");
    }
});


  //*swiper-slider part
  let mySwiper = new Swiper('.swiper-container', {
      // Optional parameters

      slidesPerView: 4,
      spaceBetween: 15,
      loop:true,
      breakpoints:{
          320:{
              slidesPerView:1,
          },
          400:{
              slidesPerView:1,
          },
          500:{
              slidesPerView:1,
          },
          600:{
              slidesPerView:2,
          },
          700:{
              slidesPerView:2,
          },
          800:{
              slidesPerView:3,
          },
          900:{
              slidesPerView:3,
          },
          1000:{
             slidesPerView:3,
          },
          1100:{
              slidesPerView: 3,
          },
          1300:{
              slidesPerView: 4,
          },
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
          }
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },




  });
  //*hamburger-menu part
  document.querySelector('.hamburger-menu').addEventListener('click', function (event) {
      event.stopPropagation();
      document.querySelector('.mobile-version').classList.toggle('open');
      document.querySelector('.hamburger-menu').classList.toggle('open');

  });
  document.querySelector(".mobile-close").addEventListener("click", function (event) {
      event.stopPropagation();
      document.querySelector('.mobile-version').classList.remove('open');
      document.querySelector('.hamburger-menu').classList.remove('open');

  });
  
  
  
  
  
  
  
  
  
  
  
  
  





















































