<template>
  <div>
    <div class="group is-published">
      <div class="hidden group-[.is-published]:block">Published</div>
    </div>
  </div>
</template>

<script>
import { splitPage, splitIntoGroups } from '~/tools/splitPage'
import { generateData } from '~/tools/generateData.js'
export default {
  data() {
    return {
      items: [],
    }
  },
  computed: {
    pageUI() {
      if (this.items.length === 0) return
      return [{ data: splitPage(11, this.items, null) }]
    },
    pageBlockUI() {
      if (this.items.length === 0) return
      const pages = splitPage(11, this.items, null)
      return [{ data: pages.map((page) => splitIntoGroups(page)) }]
    },
  },
  mounted() {
    this.generateData()
  },
  methods: {
    generateData() {
      const items = generateData()
      this.items = items
    },
  },
}
</script>
