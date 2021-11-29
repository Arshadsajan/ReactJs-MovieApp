export const settings = {
    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};