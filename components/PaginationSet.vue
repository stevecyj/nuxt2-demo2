<template>
  <div>
    <div class="flex justify-end">
      <ul class="pagination bg-white p-2 shadow-sm rounded">
        <li class="pagination-item">
          <span
            v-if="isInFirstPage"
            class="rounded-l rounded-sm border border-gray-100 px-3 py-2 cursor-not-allowed no-underline text-gray-600 h-10"
            >&laquo;</span
          >
          <a
            v-else
            class="rounded-l rounded-sm border-t border-b border-l border-gray-100 px-3 py-2 text-gray-600 hover:bg-gray-100 no-underline"
            href="#"
            role="button"
            rel="prev"
            @click.prevent="onClickFirstPage"
          >
            &laquo;
          </a>
        </li>

        <li class="pagination-item">
          <button
            type="button"
            :disabled="isInFirstPage"
            aria-label="Go to previous page"
            class="rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2 text-sm"
            :class="{ 'cursor-not-allowed': isInFirstPage }"
            @click="onClickPreviousPage"
          >
            Previous
          </button>
        </li>

        <li v-for="page in pages" :key="page.name" class="pagination-item">
          <span
            v-if="isPageActive(page.name)"
            class="rounded-sm border border-blue-100 px-3 py-2 bg-blue-100 no-underline text-blue-500 cursor-not-allowed mx-2"
            >{{ page.name }}</span
          >
          <a
            v-else
            class="rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2"
            href="#"
            role="button"
            @click.prevent="onClickPage(page.name)"
            >{{ page.name }}</a
          >
          <!-- <button
					type="button"
					@click="onClickPage(page.name)"
					:disabled="page.isDisabled"
					:class="{ active: isPageActive(page.name) }"
				>{{ page.name }}</button> -->
        </li>

        <li class="pagination-item">
          <button
            type="button"
            :disabled="isInLastPage"
            aria-label="Go to next page"
            class="rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2 text-sm"
            :class="{ 'cursor-not-allowed': isInLastPage }"
            @click="onClickNextPage"
          >
            Next
          </button>
        </li>

        <li class="pagination-item">
          <!-- <button
					type="button"
					@click="onClickLastPage"
					:disabled="isInLastPage"
					aria-label="Go to last page"
				>Last</button> -->
          <a
            v-if="hasMorePages"
            class="rounded-r rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline"
            href="#"
            rel="next"
            role="button"
            @click.prevent="onClickLastPage"
            >&raquo;</a
          >
          <span
            v-else
            class="rounded-r rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline cursor-not-allowed"
            >&raquo;</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },

    totalPages: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    perPage: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },

    hasMorePages: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    // pagination
    startPage() {
      if (this.currentPage === 1) {
        return 1
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }

      return this.currentPage - 1
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      )
    },
    pages() {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }

      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },
  mounted() {},
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>
