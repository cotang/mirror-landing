jQuery(document).ready(function($){

  /* плавный скролл */
  $('a[href^="#"]').click(function(e){
    e.preventDefault();
    var el = $(this).attr('href');
    $('body, html').animate({
    scrollTop: $(el).offset().top}, 500);
    return false;
  });

  /* галерея "примеры" */
  $('.examples__gallery').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* галерея "отзыы" */
  $('.reviews__gallery').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });



  /* Map */
  var curLat = 55.888610;
  var curLng = 37.636411;

  if ($(window).width() < 1200 && $(window).width() >= 768) {
    var map = new GMaps({
        el: '.map__inner',
        lat: curLat,
        lng: curLng + 0.008,
        scrollwheel: false
    });
  } else if ($(window).width() < 768) {
    var map = new GMaps({
        el: '.map__inner',
        lat: curLat,
        lng: curLng,
        scrollwheel: false
    });
  } else {
    var map = new GMaps({
        el: '.map__inner',
        lat: curLat,
        lng: curLng + 0.012,
        scrollwheel: false
    });
  }
  map.drawOverlay({
      lat: curLat,
      lng: curLng,
      content: '<div class="pin">Главный офис находится по адресу:<br>г. Москва, Чермянский проезд, 9</div>'
  });


  // Form Ajax sending
  var forms = $(".form");

  forms.each(function(){
    var form = $(this);

    $.validator.messages.required = '';

    $(form).validate({
      errorClass: "error",
      validClass: "valid"
    });

    form.submit (function(event) {
      if (form.valid()) {
        $.ajax({
          type: form.attr("method"), // use method specified in form attributes
          url: form.attr("action"), // use action specified in form attributes
          data: form.serialize(), // encodes set of form elements as string for submission
        })
        .done(function(){
          form.find(".form__inner").css("visibility", "hidden");
          form.find(".form__thanks").show();
          console.log("done");
        });
      }
      event.preventDefault(); // stop form from redirecting to java servlet page
    });
  });



});

