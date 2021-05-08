<template>
    <div class="row">
        <div class="col-lg-12">
            <nav class="blog-pagination justify-content-center d-flex">
                <ul class="pagination">
                    <li class="page-item">
                        <a href="#" class="page-link" aria-label="Previous">
                              <span aria-hidden="true">
                                  <span class="ti-arrow-left"></span>
                              </span>
                        </a>
                    </li>
                    <li v-for="page in last_page" :key="page" class="page-item">
                        <router-link :to="{name: 'Home', query: {'page' : page}}" class="page-link">{{ page }}</router-link>
                    </li>
<!--                    <li class="page-item active"><a href="#" class="page-link">02</a></li>-->
<!--                    <li class="page-item"><a href="#" class="page-link">03</a></li>-->
<!--                    <li class="page-item"><a href="#" class="page-link">04</a></li>-->
<!--                    <li class="page-item"><a href="#" class="page-link">09</a></li>-->
                    <li class="page-item">
                        <a href="#" class="page-link" aria-label="Next">
                                  <span aria-hidden="true">
                                      <span class="ti-arrow-right"></span>
                                  </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      cur_page: {
          type: Number,
          default: 1
      },
      last_page: {
          type: Number,
      }
    },
    name: "AppPagination"
}
</script>

<style scoped>

</style>
