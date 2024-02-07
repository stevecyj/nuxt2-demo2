<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <client-only>
      <div class="h-2 w-100 bg-blue-500"></div>
      <div class="max-w-lg mx-auto my-12">
        <pagination
          :total-pages="totalPages"
          :total="total"
          :per-page="perPage"
          :current-page="currentPage"
          :has-more-pages="hasMorePages"
          @pagechanged="showMore"
        >
        </pagination>
      </div>
      <!-- <ActivityCard /> -->
      <!-- <SwiperDiscoveryActivity :activities="items" /> -->
      <SwiperPartner :partners="items" />
    </client-only>
  </div>
</template>

<script>
import TailWind from '~/components/TailWind.vue'
import Pagination from '~/components/PaginationSet.vue'
import { generateDataActivity } from '~/tools/generateData.js'
import SwiperDemo from '~/components/SwiperDemo.vue'

export default {
  components: { TailWind, Pagination, SwiperDemo },
  data() {
    return {
      // pagination
      page: 1,
      totalPages: 4,
      total: 40,
      perPage: 10,
      currentPage: 1,
      hasMorePages: true,
      items: [],
    }
  },
  mounted() {
    const items = generateDataActivity()
    this.items = items
  },
  methods: {
    showMore(page) {
      this.page = page
      this.currentPage = page
    },
  },
}
</script>
