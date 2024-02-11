<template>
  <div>
    <div
      class="flex gap-2.5 justify-center items-center text-base leading-6 whitespace-nowrap text-slate-400"
    >
      <ul class="flex gap-3 self-stretch pr-5">
        <li class="w-6 h-6">
          <button
            type="button"
            :disabled="isInFirstPage"
            aria-label="Go to previous page"
            class="self-stretch my-auto ml-2 w-6 h-6 aspect-square"
            :class="{ 'cursor-not-allowed': isInFirstPage }"
            @click="onClickPreviousPage"
          >
            <svg-icon icon-class="fi-br-angel-left" class="" />
          </button>
        </li>

        <li v-for="page in pages" :key="page.name">
          <span
            v-if="isPageActive(page.name)"
            class="justify-center items-center px-[9px] py-1 w-6 h-6 text-blue-800 aspect-square bg-slate-300 rounded-[40px]"
            >{{ page.name }}</span
          >
          <a
            v-else
            class=""
            href="#"
            role="button"
            @click.prevent="onClickPage(page.name)"
            >{{ page.name }}</a
          >
        </li>

        <li class="pagination-item">
          <button
            type="button"
            :disabled="isInLastPage"
            aria-label="Go to next page"
            class="self-stretch my-auto w-6 h-6 aspect-square"
            :class="{ 'cursor-not-allowed': isInLastPage }"
            @click="onClickNextPage"
          >
            <svg-icon icon-class="fi-br-angle-right" />
          </button>
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
