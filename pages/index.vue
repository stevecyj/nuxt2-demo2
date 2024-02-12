<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <client-only>
      <div class="h-2 w-100 bg-blue-500"></div>
      <div class="max-w-lg mx-auto my-12">
        <pagination
          :total-pages="pagi.totalPages"
          :total="pagi.total"
          :per-page="pagi.perPage"
          :current-page="pagi.currentPage"
          :has-more-pages="pagi.hasMorePages"
          @pagechanged="showMore"
        >
        </pagination>
      </div>
      <!-- <TailWind /> -->
      <!-- <ActivityCard /> -->
      <!-- <SwiperDiscoveryActivity :activities="items" /> -->
      <!-- <SwiperPartner :partners="items" /> -->
      <!-- <SwiperNewsHonor :news-honors="items" /> -->
      <MixContent />
    </client-only>
  </div>
</template>

<script>
import TailWind from '~/components/TailWind.vue'
import Pagination from '~/components/PaginationSet.vue'
import { generateDataActivity } from '~/tools/generateData.js'
import SwiperDemo from '~/components/SwiperDemo.vue'
import SwiperNewsHonor from '~/components/swiper/SwiperNewsHonor.vue'

export default {
  components: { TailWind, Pagination, SwiperDemo, SwiperNewsHonor },
  data() {
    return {
      // pagination
      pagi: {
        page: 1,
        totalPages: 4,
        total: 40,
        perPage: 10,
        currentPage: 1,
        hasMorePages: true,
      },
      items: [],
    }
  },
  mounted() {
    const items = generateDataActivity()
    this.items = items
  },
  methods: {
    showMore(page) {
      this.pagi.page = page
      this.pagi.currentPage = page
    },
  },
}
</script>
