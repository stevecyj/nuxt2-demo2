<template>
  <client-only>
    <div class="bg-slate-200">
      <section class="self-stretch p-6 max-md:px-5 bg-slate-200">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <header
              class="grow flex flex-col justify-center w-full text-xl text-primary bg-white rounded-2xl max-md:mt-10 max-md:max-w-full"
            >
              <section
                class="grow flex overflow-hidden relative flex-col justify-center w-full min-h-[620px] max-md:max-w-full"
              >
                <div
                  class="h-[50%] max-md:h-[350px] flex relative flex-col justify-end max-md:max-w-full bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-t-2xl"
                  :style="{
                    backgroundImage: `url(https://picsum.photos/412/580),linear-gradient( transparent 20%, transparent 75%)`,
                    maskImage:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%)',
                  }"
                ></div>
                <div
                  class="flex grow relative flex-col justify-end px-5 py-7 max-md:mt-10 max-md:max-w-full"
                >
                  <div class="font-medium max-md:max-w-full">
                    {{ pageCurrentUI && pageCurrentUI[0][0].date }}
                  </div>
                  <div
                    class="mt-2 text-2xl font-semibold tracking-tight leading-7 max-md:max-w-full text-blue-800"
                  >
                    {{ pageCurrentUI && pageCurrentUI[0][0].title }}
                  </div>
                  <div class="mt-2 text-base leading-6 max-md:max-w-full">
                    {{ pageCurrentUI && pageCurrentUI[0][0].description }}
                  </div>
                  <div class="mt-2 font-medium text-left max-md:max-w-full">
                    {{ pageCurrentUI && pageCurrentUI[0][0].time }}
                  </div>
                  <button
                    class="justify-center self-start px-9 py-3 mt-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap bg-blue-800 border border-solid border-[color:var(--Black-Grey-500,#666)] rounded-[100px] max-md:px-5"
                  >
                    深入了解
                  </button>
                </div>
              </section>
            </header>
          </div>
          <div class="flex flex-col ml-5 w-6/12 max-xl:ml-0 max-md:w-full">
            <div
              v-if="pageCurrentUI && pageCurrentUI[1][0] !== null"
              class="flex flex-col grow max-md:mt-10 max-md:max-w-full"
            >
              <div
                class="justify-center bg-white rounded-2xl max-md:max-w-full"
              >
                <div class="flex gap-5 max-md:flex-col max-xl:gap-0 max-md:">
                  <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div
                      class="mask grow w-full aspect-[1.09] bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-t-2xl md:rounded-none md:rounded-l-2xl"
                      :style="{
                        backgroundImage: `url(https://picsum.photos/324/298),linear-gradient( transparent 20%, transparent 75%)`,
                      }"
                    ></div>
                  </div>
                  <div
                    class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                  >
                    <div
                      class="flex flex-col grow justify-center px-6 py-6 text-xl text-stone-500 max-md:px-5"
                    >
                      <div class="font-medium whitespace-nowrap">
                        {{ pageCurrentUI && pageCurrentUI[1][0].date }}
                      </div>
                      <div
                        class="mt-3 text-2xl font-semibold tracking-tight leading-7 text-blue-800"
                      >
                        {{ pageCurrentUI && pageCurrentUI[1][0].title }}
                      </div>
                      <div class="mt-3 text-base leading-6">
                        {{ pageCurrentUI && pageCurrentUI[1][0].description }}
                      </div>
                      <div class="mt-3 font-medium text-left">
                        {{ pageCurrentUI && pageCurrentUI[1][0].time }}
                      </div>
                      <button
                        class="justify-center self-start px-8 py-3 mt-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap bg-blue-800 border border-solid border-[color:var(--Black-Grey-500,#666)] rounded-[100px] max-md:px-5"
                      >
                        深入了解
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="pageCurrentUI && pageCurrentUI[1][1] !== null"
              class="justify-center mt-6 bg-white rounded-2xl max-md:max-w-full"
            >
              <div class="flex gap-5 max-md:flex-col max-xl:gap-0 max-md:">
                <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div
                    class="mask grow w-full aspect-[1.09] bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-t-2xl md:rounded-none md:rounded-l-2xl"
                    :style="{
                      backgroundImage: `url(https://picsum.photos/324/298),linear-gradient( transparent 20%, transparent 75%)`,
                    }"
                  ></div>
                </div>
                <div
                  class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                >
                  <div
                    class="flex flex-col grow justify-center px-6 py-6 text-xl text-stone-500 max-md:px-5"
                  >
                    <div class="font-medium whitespace-nowrap">
                      {{ pageCurrentUI && pageCurrentUI[1][1].date }}
                    </div>
                    <div
                      class="mt-3 text-2xl font-semibold tracking-tight leading-7 text-blue-800"
                    >
                      {{ pageCurrentUI && pageCurrentUI[1][1].title }}
                    </div>
                    <div class="mt-3 text-base leading-6">
                      {{ pageCurrentUI && pageCurrentUI[1][1].description }}
                    </div>
                    <div class="mt-3 font-medium text-left">
                      {{ pageCurrentUI && pageCurrentUI[1][1].time }}
                    </div>
                    <button
                      class="justify-center self-start px-8 py-3 mt-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap bg-blue-800 border border-solid border-[color:var(--Black-Grey-500,#666)] rounded-[100px] max-md:px-5"
                    >
                      深入了解
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- bottom card  -->
      <div
        class="flex flex-col flex-wrap content-start max-sm:content-center p-5 max-md:px-5 bg-slate-200"
      >
        <header class="max-md:max-w-full">
          <div
            v-if="pageCurrentUI && pageCurrentUI[2]"
            class="flex flex-wrap gap-x-0 gap-y-4 max-md:flex-col max-md:gap-x-0 max-md:gay-y-4"
          >
            <div
              v-for="(card, idx) in pageCurrentUI[2]"
              :key="idx"
              class="flex flex-col w-3/12 max-xl:w-6/12 max-md:ml-0 max-md:w-full"
            >
              <!-- card block -->
              <header
                v-if="card !== null"
                class="flex flex-col place-self-center justify-center text-xl font-medium text-primary border-2 bg-white rounded-2xl max-w-[330px]"
              >
                <section
                  class="grow flex overflow-hidden relative flex-col justify-center w-full min-h-[620px] max-md:max-w-full"
                >
                  <div
                    class="h-[50%] max-md:h-[350px] flex relative flex-col justify-end max-md:max-w-full bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-t-2xl"
                    :style="{
                      backgroundImage: `url(${card.imgSrc}),linear-gradient( transparent 20%, transparent 75%)`,
                      maskImage:
                        'linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%)',
                    }"
                  ></div>
                  <div
                    class="flex grow relative flex-col justify-end px-5 py-7 max-md:mt-10 max-md:max-w-full"
                  >
                    <div class="font-medium max-md:max-w-full">
                      {{ card.date }}
                    </div>
                    <div
                      class="mt-2 text-2xl font-semibold tracking-tight leading-7 max-md:max-w-full"
                    >
                      {{ card.title }}
                    </div>
                    <div class="mt-2 text-base leading-6 max-md:max-w-full">
                      {{ card.description }}
                    </div>
                    <div class="mt-2 font-medium text-left max-md:max-w-full">
                      {{ card.time }}
                    </div>
                    <button
                      class="justify-center self-start px-9 py-3 mt-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap bg-blue-800 border border-solid border-[color:var(--Black-Grey-500,#666)] rounded-[100px] max-md:px-5"
                    >
                      深入了解
                    </button>
                  </div>
                </section>
              </header>
              <header
                v-else
                class="flex flex-col place-self-center justify-center text-xl font-medium text-primary border-2 bg-white rounded-2xl min-w-[330px]"
              ></header>
            </div>
          </div>
        </header>
        <!-- <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col grow justify-center text-xl font-medium text-white rounded-2xl max-md:mt-6"
          ></div>
        </div> -->
        <!-- <section class="mt-6 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"></div>
            <div
              class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
            ></div>
            <div
              class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
            ></div>
            <div
              class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
            ></div>
          </div>
        </section> -->
      </div>
      <div class="max-w-xl mx-auto xl:py-12 bg-slate-200">
        <pagination
          :max-visible-buttons="pagi.totalPages"
          :total-pages="pagi.totalPages"
          :total="pagi.total"
          :per-page="pagi.perPage"
          :current-page="pagi.currentPage"
          :has-more-pages="pagi.hasMorePages"
          @pagechanged="showMore"
        >
        </pagination>
      </div>
    </div>
  </client-only>
</template>
<script>
import Pagination from '~/components/PaginationSet.vue'
import { splitPage, splitIntoGroups } from '~/tools/splitPage'
import { generateDataActivity } from '~/tools/generateData.js'

export default {
  components: { Pagination },
  data() {
    return {
      // pagination
      pagi: {
        page: 1,
        totalPages: 2,
        total: 40,
        perPage: 10,
        currentPage: 1,
        hasMorePages: true,
      },
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
      const pageBlocks = pages.map((page) => splitIntoGroups(page))
      return [{ data: pageBlocks }]
    },
    pageCurrentUI() {
      if (this.items.length === 0) return
      return this.pageBlockUI[0].data[this.pagi.currentPage - 1]
    },
  },
  watch: {
    pageBlockUI(val) {
      console.log('pageBlockUI', val)
      this.pagi.totalPages = val[0].data.length
    },
  },
  mounted() {
    this.generateData()
  },
  methods: {
    generateData() {
      const items = generateDataActivity()
      this.items = items
    },
    showMore(page) {
      this.pagi.page = page
      this.pagi.currentPage = page
    },
  },
}
</script>
<style lang="scss" scoped>
.mask {
  mask-image: linear-gradient(black 75%, transparent 100%);
}
@media (min-width: 768px) {
  .mask {
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.75) 75%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}
</style>
