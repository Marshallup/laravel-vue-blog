<template>
    <div>
<!--        ================ Start Header Area =================-->
        <the-header></the-header>
        <app-message></app-message>
        <router-view></router-view>
<!--        <keep-alive>-->
<!--            &lt;!&ndash;        ================ End Header Area =================&ndash;&gt;-->
<!--            <component v-if="layout" :is="layout + '-layout'"></component>-->
<!--            &lt;!&ndash;        ================ Start Footer Area =================&ndash;&gt;-->
<!--        </keep-alive>-->
        <the-footer></the-footer>
<!--        ================ End Footer Area =================-->
    </div>
</template>

<script>
import TheHeader from "../../components/TheHeader";
import AppMessage from "../../components/AppMessage";
import TheFooter from "../../components/TheFooter";

// import HomeLayout from "../layouts/HomeLayout";
// import PostLayout from "../layouts/PostLayout";

export default {
    name: "BlogTemplate",
    components: {
        TheHeader,
        AppMessage,
        TheFooter,
        // HomeLayout,
        'HomeLayout': () => import('../layouts/HomeLayout'),
        'PostLayout': () => import('../layouts/PostLayout'),
        // PostLayout

    },
    computed: {
        layout () {
            return this.$route.meta.layout
        },
    },
    mounted() {
        require('../../../Vue/js/blog/vendor/jquery-2.2.4.min');
        require('../../../Vue/js/blog/vendor/bootstrap.min');
        require('../../../Vue/js/blog/owl.carousel.min.js');
        require('../../../Vue/js/blog/jquery.sticky.js');
        require('../../../Vue/js/blog/jquery.tabs.min.js');
        require('../../../Vue/js/blog/parallax.min.js');
        require('../../../Vue/js/blog/jquery.ajaxchimp.min.js');
        require('../../../Vue/js/blog/jquery.magnific-popup.min.js');
        require('../../../Vue/js/blog/bootstrap-datepicker.js');
        require('../../../Vue/js/blog/jquery.nice-select.min.js');
        require('../../../Vue/js/blog/main.js');
    }
}
</script>

<style scoped>
    @import "/resources/Vue/css/blog/linearicons.css";
    @import "/resources/Vue/css/blog/font-awesome.min.css";
    @import "/resources/Vue/css/blog/magnific-popup.css";

    @import "/resources/Vue/css/blog/nice-select.css";
    @import "/resources/Vue/css/blog/owl.carousel.css"; /* ? */
    @import "/resources/Vue/css/blog/bootstrap.css";

    @import "/resources/Vue/css/blog/bootstrap-datepicker.css";
    @import "/resources/Vue/css/blog/themify-icons.css";
    @import "/resources/Vue/css/blog/main.css";
</style>
