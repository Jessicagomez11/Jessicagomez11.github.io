$(document).ready(function () {


    // $(".lazy").slick({
    //     lazyLoad: 'ondemand', // ondemand progressive anticipated
    //     infinite: true
    //   });

      // $(".regular").slick({
      //   dots: true,
      //   infinite: true,
      //   // variableWidth: true
      // });
           
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        centerMode: true,
      });

    $('.tooltipped').tooltip();


  
});