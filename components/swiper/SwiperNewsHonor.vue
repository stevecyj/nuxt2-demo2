<template>
  <div class="discovery-activity">
    <div
      v-swiper:mySwiper="swiperOption"
      class="swiper-container bg-tertiary-100"
    >
      <div class="swiper-wrapper swiper">
        <div
          v-for="(item, key) in newsHonors"
          :key="key"
          class="swiper-slide bg-tertiary-100"
          style="width: 356px"
        >
          <news-honor-card :news-honors="item" />
        </div>
      </div>
      <div slot="scrollbar" class="swiper-scrollbar"></div>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div class="swiper-button-menu_dots"></div>
    </div>
  </div>
</template>

<script>
import NewsHonorCard from '@/components/NewsHonorCard'

export default {
  name: 'SwiperNewsHonor',
  components: {
    // VideoCard,
    NewsHonorCard,
  },
  props: {
    newsHonors: {
      type: Array,
      required: true,
    },
    fav: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
        centeredSlides: true,
        breakpoints: {
          1536: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        // ...
      },
      list: [],
      items: [],
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  },
}
</script>
<style lang="scss">
@import '@/scss/variables.scss';

.discovery-activity {
  .swiper-container {
    /* --swiper-theme-color: #ff6600; */
    padding-bottom: 188px;

    .swiper-scrollbar {
      /* height: 4px;
    width: 100%;
    border-radius: 2px; */
      background-color: #cbd5e1;

      position: absolute;
      bottom: 3px;
      z-index: 50;
      height: 6px;
    }
    @media (min-width: 640px) {
      .swiper-scrollbar {
        width: 50%;
        top: 84%;
        left: 23%;
      }
    }
    @media (min-width: 768px) {
      .swiper-scrollbar {
        width: 70%;
        top: 84%;
        left: 6%;
      }
    }
    @media (min-width: 1024px) {
      .swiper-scrollbar {
        width: 70%;
        top: 84%;
        left: 9%;
      }
    }
    @media (min-width: 1280px) {
      .swiper-scrollbar {
        width: 83%;
        top: 86%;
        left: 3%;
      }
    }
    @media (min-width: 1536px) {
      .swiper-scrollbar {
        width: 85%;
        /* margin-bottom: 6%; */
        top: 85.5%;
        left: 2%;
      }
    }
  }

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: $font-size-huge * 2;
      color: $black;
      margin: 4px 0;
    }
  }

  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: #3559b2;
    border-radius: 10px;
    left: 0;
    top: 0;
  }

  .swiper-button-next {
    right: 8%;
    left: auto;

    &::after {
      content: '';
      display: block;
      width: 44px;
      height: 44px;
      background: url('/icon/icon-chevron-right.svg') no-repeat;
      background-size: 100%;
    }
  }

  .swiper-button-prev {
    left: 88%;
    right: auto;

    &::after {
      content: '';
      display: block;
      width: 44px;
      height: 44px;
      background: url('/icon/icon-chevron-left.svg') no-repeat;
      background-size: 100%;
    }
  }

  .swiper-button-menu_dots {
    right: 8%;
    left: auto;

    &::after {
      content: '';
      display: block;
      width: 44px;
      height: 44px;
      background: url('/icon/icon-menu-dots.svg') no-repeat;
      background-size: 100%;
    }
  }

  .swiper-button-menu_dots,
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    /* top: 84%; */
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
    /* color: #007aff; */
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }
  @media (min-width: 640px) and (max-width: 767px) {
    .swiper-button-prev {
      left: 75%;
    }
    .swiper-button-next {
      right: 15%;
    }
    .swiper-button-menu_dots {
      right: 9%;
    }
    .swiper-button-menu_dots,
    .swiper-button-prev,
    .swiper-button-next {
      top: 85.5%;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .swiper-button-prev {
      left: 79%;
    }
    .swiper-button-next {
      right: 12%;
    }
    .swiper-button-menu_dots {
      right: 6.5%;
    }
    .swiper-button-menu_dots,
    .swiper-button-prev,
    .swiper-button-next {
      top: 85.5%;
    }
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    .swiper-button-prev {
      left: 81%;
    }
    .swiper-button-next {
      right: 12%;
    }
    .swiper-button-menu_dots {
      right: 7.7%;
    }

    .swiper-button-menu_dots,
    .swiper-button-prev,
    .swiper-button-next {
      top: 85.5%;
    }
  }
  @media (min-width: 1280px) and (max-width: 1535px) {
    .swiper-button-prev {
      left: 88%;
    }
    .swiper-button-next {
      right: 6.5%;
    }
    .swiper-button-menu_dots {
      right: 3%;
    }
    .swiper-button-menu_dots,
    .swiper-button-prev,
    .swiper-button-next {
      top: 87.5%;
    }
  }
  @media (min-width: 1536px) {
    .swiper-button-prev {
      left: 88%;
    }
    .swiper-button-next {
      right: 7%;
    }
    .swiper-button-menu_dots {
      right: 4%;
    }
    .swiper-button-menu_dots,
    .swiper-button-prev,
    .swiper-button-next {
      top: 87%;
    }
  }
}
</style>
