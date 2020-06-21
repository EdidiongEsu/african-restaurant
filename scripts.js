$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  //Animation on Scroll library(AOS)
  AOS.init({
    easing: "ease",
    duration: 1000,
  });

  // Creating a datetimepicker

  $("#datetimepicker").datetimepicker({
    // format: 'YYYY/MM/DD'
    debug: true,
    icons: {
      time: "far fa-clock",
      date: "fa fa-calendar",
      dateformat: "DD / MM / YYYY",
      up: "fas fa-arrow-up",
      down: "fas fa-arrow-down",
      previous: "fas fa-chevron-left",
      next: "fas fa-chevron-right",
      today: "far fa-calendar-check-o",
      clear: "far fa-trash",
      close: "fa fa-times",
    },
    locale: "en",
    allowInputToggle: true,
    minDate: moment(),
    stepping: 15,
    showClose: true,
  });
});
