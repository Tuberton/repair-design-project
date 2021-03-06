!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$(document).ready(function () {
//Анимация с помощью JS
  $('.elementRight').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideRight',
    offset: 100
  });

  $('.elementLeft').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideLeft',
    offset: 100
  });

  $('.elementUp').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideUp',
    offset: 100
  });

  $('.elementDown').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideDown',
    offset: 100
  });

  $(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  //Кнопка вниз
  var height = $(window).height();
  $('.hero__scroll-down').on('click',function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop: height}, 1500);
  });

  //Модальное окно
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    modalDialog = $(".modal__dialog");

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  modal.on('click', function (e){
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0){
      modal.toggleClass('modal--visible');
    }
  });

  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27 && modal.hasClass('modal--visible')) {
      modal.toggleClass('modal--visible');
    }
  });


  var modalSend = $('.modal__send-success'),
    closeSendBtn = $('.modal__send-success-close'),
    modalSendDialog = $(".modal__send-success-dialog");

    closeSendBtn.on('click', function () {
      modalSend.toggleClass('modal__send-success--visible');
  });

  modalSend.on('click', function (e){
    if (!modalSendDialog.is(e.target) && modalSendDialog.has(e.target).length === 0){
      modalSend.toggleClass('modal__send-success--visible');
    }
  });

$(this).keydown(function (eventObject) {
  if (eventObject.which == 27 && modalSend.hasClass('modal__send-success--visible')) {
    modalSend.toggleClass('modal__send-success--visible');
  }
});









  //Кнопка наверх
  var btn = $('.button__scroll-top');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('button__scroll-top--show');
    } else {
      btn.removeClass('button__scroll-top--show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1600);
  });

  //initialize swiper when document ready
  var mySwiperProjects = new Swiper ('.projects__swiper-container', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
  var bullets = $('.projects__swiper-pagination');

  bullets.css('left', prev.width() + 30);
  next.css('left', prev.width() + 25 + bullets.width() + 30);

  var mySwiperSteps = new Swiper ('.steps__swiper-container', {
    loop: true,
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });

  var nextStep = $('.steps__swiper-button-next');
  var prevStep = $('.steps__swiper-button-prev');
  var bulletsStep = $('.steps__swiper-pagination');

  nextStep.css('left', prevStep.width() + 25 + bulletsStep.width() + 30);
  bulletsStep.css('left', prevStep.width() + 30);

  $(".slide-1").click(function(){
    mySwiperSteps[0].slideTo(1);
    mySwiperSteps[1].slideTo(1);
  });

  $(".slide-2").click(function(){
    mySwiperSteps[0].slideTo(2);
    mySwiperSteps[1].slideTo(2);
  });

  $(".slide-3").click(function(){
    mySwiperSteps[0].slideTo(3);
    mySwiperSteps[1].slideTo(3);
  });

  $(".slide-4").click(function(){
    mySwiperSteps[0].slideTo(4);
    mySwiperSteps[1].slideTo(4);
  });

  $(".slide-5").click(function(){
    mySwiperSteps[0].slideTo(5);
    mySwiperSteps[1].slideTo(5);
  });

  $(".slide-6").click(function(){
    mySwiperSteps[0].slideTo(6);
    mySwiperSteps[1].slideTo(6);
  });

  $(".toggle-button__content").click(function(e) {
    e.preventDefault();
    $(".toggle-button__content").removeClass('toggle-button__content--active');
    $(this).addClass('toggle-button__content--active');
  });

  mySwiperSteps[0].on('slideChange', function () {
    $(".toggle-button__content").removeClass('toggle-button__content--active');
    $('.slide-' + (mySwiperSteps[0].realIndex + 1)).addClass('toggle-button__content--active');
  });

  var stylesSwiper = new Swiper ('.styles__swiper-container', {
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: '.styles__swiper-button-next',
      prevEl: '.styles__swiper-button-prev',
    },
  });

  $(".styles__slide-1").click(function(){
    stylesSwiper.slideTo(1);
  });

  $(".styles__slide-2").click(function(){
    stylesSwiper.slideTo(2);
  });

  $(".styles__slide-3").click(function(){
    stylesSwiper.slideTo(3);
  });

  $(".styles__slide-4").click(function(){
    stylesSwiper.slideTo(4);
  });

  $(".styles__slide-5").click(function(){
    stylesSwiper.slideTo(5);
  });

  $(".styles__slide-6").click(function(){
    stylesSwiper.slideTo(6);
  });

  $(".styles__slide-7").click(function(){
    stylesSwiper.slideTo(7);
  });

  $(".styles__slide-8").click(function(){
    stylesSwiper.slideTo(8);
  });

  $(".styles__slide-9").click(function(){
    stylesSwiper.slideTo(9);
  });

  $(".styles__slide-10").click(function(){
    stylesSwiper.slideTo(10);
  });

  $(".styles__slide-11").click(function(){
    stylesSwiper.slideTo(11);
  });

  $(".styles__link").click(function(e) {
    e.preventDefault();
    $(".styles__link").removeClass('styles__link--active');
    $(this).addClass('styles__link--active');
  });

  //Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      userEmail: {
        required: true,
        email: true,
      },
      policyCheckbox: {
        required: true,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не длиннее 15 символов",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Должно быть 11 цифр",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      policyCheckbox: {
        required: "Необходимо согласие",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.modal').toggleClass('modal--visible');
          $('.modal__send-success').toggleClass('modal__send-success--visible');
         // $('.modal__form').addClass('modal__form--hidden');
         // $('.modal__send-success').addClass('modal__send-success--visible');
        },
        error: function (response) {
          console.log('Ошибка запроса' + response);
        },
      });
    },
  });

  $('.measure__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      userEmail: {
        required: true,
        email: true,
      },
      policyCheckbox: {
        required: true,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не длиннее 15 символов",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Должно быть 11 цифр",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      policyCheckbox: {
        required: "Необходимо согласие",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
         // $('.modal').toggleClass('modal--visible');
          $('.modal__send-success').toggleClass('modal__send-success--visible');
          //$('.measure__form').addClass('measure__form--hidden');
         // $('.measure__send-success').addClass('measure__send-success--visible');
        },
        error: function (response) {
          console.log('Ошибка запроса' + response);
        },
      });
    },
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      policyCheckbox: {
        required: true,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не длиннее 15 символов",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Должно быть 11 цифр",
      },
      policyCheckbox: {
        required: "Необходимо согласие",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
         // $('.modal').toggleClass('modal--visible');
          $('.modal__send-success').toggleClass('modal__send-success--visible');
          //$('.control__form').addClass('control__form--hidden');
          //$('.control__send-success').addClass('control__send-success--visible');
        },
        error: function (response) {
          console.log('Ошибка запроса' + response);
        },
      });
    },
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      policyCheckbox: {
        required: true,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не длиннее 15 символов",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Должно быть 11 цифр",
      },
      policyCheckbox: {
        required: "Необходимо согласие",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
         // $('.modal').toggleClass('modal--visible');
          $('.modal__send-success').toggleClass('modal__send-success--visible');
         // $('.footer__form').addClass('footer__form--hidden');
        //  $('.footer__send-success').addClass('footer__send-success--visible');
        },
        error: function (response) {
          console.log('Ошибка запроса' + response);
        },
      });
    },
  });

  // Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

  //Кнопка play
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'gtXQ-XYFg_0',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  }

});
