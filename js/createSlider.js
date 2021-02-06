const createSlider = () => {
   $(document).ready(function () {
      $('.slider').slick({
         arrows: true,
         slidesToShow: 5,
         autoplay: true,
         speed: 500,
         autoplaySpeed: 4000,
         responsive: [{
               breakpoint: 768,
               settings: {
                  slidesToShow: 5
               }
            },
            {
               breakpoint: 550,
               settings: {
                  slidesToShow: 5
               }
            }
         ]
      });
   });
}

export {
   createSlider
};