<template>
    <section class="home-banner-area relative">
        <div class="container-fluid">
            <div class="row">
                <div class="owl-carousel home-banner-owl">
                    <div class="banner-img">
                        <img class="img-fluid" src="/img/mainSlider/b1.jpg" alt="" />
                        <div class="text-wrapper">
                            <a href="#" class="d-flex">
                                <h1>
                                    Make the world a better place <br />
                                    with camera
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div class="banner-img">
                        <img class="img-fluid" src="/img/mainSlider/b2.jpg" alt="" />
                        <div class="text-wrapper">
                            <a href="#" class="d-flex">
                                <h1>
                                    Make the world a better place <br />
                                    with camera
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div class="banner-img">
                        <img class="img-fluid" src="/img/mainSlider/b1.jpg" alt="" />
                        <div class="text-wrapper">
                            <a href="#" class="d-flex">
                                <h1>
                                    Make the world a better place <br />
                                    with camera
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div class="banner-img">
                        <img class="img-fluid" src="/img/mainSlider/b2.jpg" alt="" />
                        <div class="text-wrapper">
                            <a href="#" class="d-flex">
                                <h1>
                                    Make the world a better place <br />
                                    with camera
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="social-icons">
            <ul>
                <li>
                    <a href="index.html"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="index.html"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                    <a href="index.html"><i class="fa fa-pinterest"></i></a>
                </li>
                <li class="diffrent">sharre now</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "TheHomeSlider.vue",
    mounted() {
        // -------   Owl Carousel -----//
        // function home_banner_slider() {
        //     if ($(".home-banner-owl").length) {
        //         $(".home-banner-owl").owlCarousel({
        //             loop: true,
        //             margin: 10,
        //             items: 1,
        //             nav: true,
        //             autoplay: 2500,
        //             smartSpeed: 1500,
        //             dots: true,
        //             responsiveClass: true,
        //             stagePadding: 140,
        //             navText: [
        //                 "<img src='img/prev.png' alt='' />",
        //                 "<img src='img/next.png' alt='' />"
        //             ],
        //             responsive: {
        //                 0: {
        //                     margin: 0,
        //                     stagePadding: 0
        //                 },
        //                 1299: {
        //                     margin: 10,
        //                     stagePadding: 140
        //                 }
        //             }
        //         });
        //     }
        // }
        // home_banner_slider();
    }
}
</script>

<style scoped>

</style>
