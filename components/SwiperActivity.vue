<template>
  <div class="activity">
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper swiper">
        <div v-for="banner in bannerTexts" :key="banner" class="swiper-slide">
          <!-- <img :src="banner" /> -->
          {{ banner }}
        </div>
      </div>
      <div slot="scrollbar" class="swiper-scrollbar"></div>
    </div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
      bannerTexts: [
        'banner1',
        'banner2',
        'banner3',
        'banner4',
        'banner5',
        'banner6',
        'banner7',
        'banner8',
        'banner9',
        'banner10',
      ],
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
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        // ...
      },
      list: [],
      items: [],
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
  },
}
</script>
<style lang="scss">
@import '@/scss/variables.scss';

.activity {
  .swiper-container {
    background-color: #f7f7f7;
  }

  .swiper {
    height: 300px !important;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: $font-size-huge * 2;
      background-color: $white;
    }
  }

  .swiper-button-next {
    right: 20%;
    left: auto;
  }

  .swiper-button-prev {
    left: 70%;
    right: auto;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 80%;
    width: calc(44px / 44 * 27);
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: 44px;
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * 44px / 2);
    margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #007aff;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }
}
</style>
