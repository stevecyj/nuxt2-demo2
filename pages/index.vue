<template>
  <div>
    <SwiperActivity />
    <!-- <ul>
      <li v-for="item in list" :key="item.id">{{ item.imageName }}</li>
    </ul> -->
    <!-- <NewsArea /> -->
  </div>
</template>

<script>
// import NewsArea from '~/components/NewsArea.vue'

export default {
  // components: { NewsArea },
  // page 目錄內才能使用 asyncData
  async asyncData({ $axios }) {
    const res = await $axios.get(
      'http://testapi.xuexiluxian.cn/api/slider/getSliders'
    )
    const { list } = res.data.data
    // 沒有 this
    return { list }
  },

  data() {
    return {
      banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
      bannerTexts: ['banner1', 'banner2', 'banner3'],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // ...
      },
      list: [],
      items: [],
    }
  },
  async fetch({ $axios }) {
    const res = await $axios.get(
      'http://testapi.xuexiluxian.cn/api/slider/getSliders'
    )
    const { list } = res.data.data
    // console.log('list', list)
    this.items = list
  },
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
  },
}
</script>
