<template>
    <div v-if="!post" class="col-lg-8">Пост не найден!</div>
    <div v-else class="col-lg-8">
<!--        <ul>-->
<!--            <router-link :to="{ name: 'createPost'}" >Создать пост</router-link> <br>-->
<!--            <router-link :to="{ name: 'createCategory'}" >Создать категорию</router-link> <br>-->
<!--            <router-link :to="{ name: 'createTag'}" >Создать тег</router-link>-->
<!--            <router-link :to="{ name: 'Post' }">Пост</router-link>-->

<!--        </ul>-->
            <div class="main_blog_details">
                <img class="img-fluid" :src="post.thumbnail" alt="">
                <a href="#">
                    <h4>
                        {{ post.title }}
                    </h4>
                </a>
                <div class="user_details">
                    <div v-if="post.tags" class="float-left">
                        <a
                            v-for="tag in post.tags"
                            :key="tag.id"
                            href="#"
                        >
                            {{ tag.title }}
                        </a>
                    </div>
                    <div class="float-right mt-sm-0 mt-3">
                        <div class="media">
                            <div class="media-body">
                                <h5>Mark wiens</h5>
                                <p>{{ post.created_at | dateFormat_DD_MMM_YYYY_HH_mm_A }}</p>
                            </div>
                            <div class="d-flex">
                                <img src="/img/blog/user-img.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div v-html="post.content" class="post-content"></div>


                <div class="news_d_footer flex-column flex-sm-row">
                    <a href="#"><i class="lnr lnr lnr-heart"></i>Lily and 4 people like this</a>
                    <a class="justify-content-sm-center ml-sm-auto mt-sm-0 mt-2" href="#"><i class="lnr lnr lnr-bubble"></i>06 Comments</a>
                    <div class="news_socail ml-sm-auto mt-sm-0 mt-2">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                        <a href="#"><i class="fa fa-pinterest"></i></a>
                        <a href="#"><i class="fa fa-rss"></i></a>
                    </div>
                </div>
            </div>
            <div class="navigation-area">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                        <div class="thumb">
                            <a href="#"><img class="img-fluid" src="/img/blog/prev.jpg" alt=""></a>
                        </div>
                        <div class="arrow">
                            <a href="#"><span class="lnr text-white lnr-arrow-left"></span></a>
                        </div>
                        <div class="detials">
                            <p>Prev Post</p>
                            <a href="#"><h4>A Discount Toner</h4></a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                        <div class="detials">
                            <p>Next Post</p>
                            <a href="#"><h4>Cartridge Is Better</h4></a>
                        </div>
                        <div class="arrow">
                            <a href="#"><span class="lnr text-white lnr-arrow-right"></span></a>
                        </div>
                        <div class="thumb">
                            <a href="#"><img class="img-fluid" src="/img/blog/next.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comments-area">
                <h4>05 Comments</h4>
                <div class="comment-list">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex">
                            <div class="thumb">
                                <img src="/img/blog/c1.jpg" alt="">
                            </div>
                            <div class="desc">
                                <h5><a href="#">Emilly Blunt</a></h5>
                                <p class="date">December 4, 2017 at 3:12 pm </p>
                                <p class="comment">
                                    Never say goodbye till the end comes!
                                </p>
                            </div>
                        </div>
                        <div class="reply-btn">
                            <a href="" class="btn-reply text-uppercase">reply</a>
                        </div>
                    </div>
                </div>
                <div class="comment-list left-padding">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex">
                            <div class="thumb">
                                <img src="/img/blog/c2.jpg" alt="">
                            </div>
                            <div class="desc">
                                <h5><a href="#">Elsie Cunningham</a></h5>
                                <p class="date">December 4, 2017 at 3:12 pm </p>
                                <p class="comment">
                                    Never say goodbye till the end comes!
                                </p>
                            </div>
                        </div>
                        <div class="reply-btn">
                            <a href="" class="btn-reply text-uppercase">reply</a>
                        </div>
                    </div>
                </div>
                <div class="comment-list left-padding">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex">
                            <div class="thumb">
                                <img src="/img/blog/c3.jpg" alt="">
                            </div>
                            <div class="desc">
                                <h5><a href="#">Annie Stephens</a></h5>
                                <p class="date">December 4, 2017 at 3:12 pm </p>
                                <p class="comment">
                                    Never say goodbye till the end comes!
                                </p>
                            </div>
                        </div>
                        <div class="reply-btn">
                            <a href="" class="btn-reply text-uppercase">reply</a>
                        </div>
                    </div>
                </div>
                <div class="comment-list">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex">
                            <div class="thumb">
                                <img src="/img/blog/c4.jpg" alt="">
                            </div>
                            <div class="desc">
                                <h5><a href="#">Maria Luna</a></h5>
                                <p class="date">December 4, 2017 at 3:12 pm </p>
                                <p class="comment">
                                    Never say goodbye till the end comes!
                                </p>
                            </div>
                        </div>
                        <div class="reply-btn">
                            <a href="" class="btn-reply text-uppercase">reply</a>
                        </div>
                    </div>
                </div>
                <div class="comment-list">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex">
                            <div class="thumb">
                                <img src="/img/blog/c5.jpg" alt="">
                            </div>
                            <div class="desc">
                                <h5><a href="#">Ina Hayes</a></h5>
                                <p class="date">December 4, 2017 at 3:12 pm </p>
                                <p class="comment">
                                    Never say goodbye till the end comes!
                                </p>
                            </div>
                        </div>
                        <div class="reply-btn">
                            <a href="" class="btn-reply text-uppercase">reply</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-form">
                <h4>Leave a Reply</h4>
                <form>
                    <div class="form-group form-inline">
                        <div class="form-group col-lg-6 col-md-6 name">
                            <input type="text" class="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'">
                        </div>
                        <div class="form-group col-lg-6 col-md-6 email">
                            <input type="email" class="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'">
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
                    </div>
                    <a href="#" class="primary-btn submit_btn">Post Comment</a>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: "SinglePost",
    computed: {
      post () {
          return this.$store.getters['getPost'];
      }
    },
    beforeMount() {
        // console.log(this.$route);
        this.$store.dispatch('loadSingle', {
            name: 'post',
            type: 'posts',
            slug: this.$route.params.slug
        });
    }
}
</script>

<style scoped>
.employer-form {
    width: auto;
}
.form-inputs-group {
    margin: 0 auto;
    max-width: 600px;
}
</style>
