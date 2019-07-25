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
        responsive: [
          
            {
              breakpoint: 758,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
        ]
      });

    $('.tooltipped').tooltip();


  
});