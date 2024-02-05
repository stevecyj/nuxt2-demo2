<template>
  <div id="app" class="min-h-screen bg-gray-100">
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
  </div>
</template>

<script>
import TailWind from '~/components/TailWind.vue'
import Pagination from '~/components/PaginationSet.vue'

export default {
  components: { TailWind, Pagination },
  data() {
    return {
      page: 1,
      totalPages: 4,
      total: 40,
      perPage: 10,
      currentPage: 1,
      hasMorePages: true,
    }
  },
  mounted() {},
  methods: {
    showMore(page) {
      this.page = page
      this.currentPage = page
    },
  },
}
</script>
