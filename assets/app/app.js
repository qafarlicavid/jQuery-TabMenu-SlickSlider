
// Tab Menu

let btns = document.querySelectorAll('.tab-links button')
for(let btn of btns){
    $(btn).click(function(){
        let active = document.querySelector('.active-btn')
        active.classList.remove('active-btn')

        this.classList.add('active-btn');

        let id = this.getAttribute('id');

        let divs = document.querySelectorAll('.contents div');
        
        for(let div of divs){
            if(div.id === id){
                div.classList.remove('d-none')
            }
            else{
                div.classList.add('d-none')
            }

        }

    })
}


// Slider //

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });