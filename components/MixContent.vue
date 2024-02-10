<template>
  <div>
    <section class="self-stretch p-6 max-md:px-5">
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
                  maskImage: 'linear-gradient(black 75%, transparent 100%)',
                }"
              >
                <!-- <div class="font-medium max-md:max-w-full">2024/01/31 FRI</div>
              <div
                class="mt-2 text-2xl font-semibold tracking-tight leading-7 max-md:max-w-full"
              >
                語言共舞：跨足多國文化之旅
              </div>
              <div class="mt-2 text-base leading-6 max-md:max-w-full">
                Eget ultricies nulla rutrum et mattis bibendum rhoncus cras est.
                Ultrices iaculis turpis viverra urna nisi sollicitudin mattis
                non tellus.
              </div>
              <div class="mt-2 font-medium text-center max-md:max-w-full">
                20:00 PM ~ 22:00 PM
              </div>
              <button
                class="justify-center self-start px-9 py-3 mt-4 text-base font-bold tracking-wide capitalize whitespace-nowrap border border-solid border-[color:var(--Basic-White,#FFF)] rounded-[100px] max-md:px-5"
              >
                深入了解
              </button> -->
              </div>
              <div
                class="flex grow relative flex-col justify-end px-5 py-7 max-md:mt-10 max-md:max-w-full"
              >
                <div class="font-medium max-md:max-w-full">2024/01/31 FRI</div>
                <div
                  class="mt-2 text-2xl font-semibold tracking-tight leading-7 max-md:max-w-full"
                >
                  語言共舞：跨足多國文化之旅
                </div>
                <div class="mt-2 text-base leading-6 max-md:max-w-full">
                  Eget ultricies nulla rutrum et mattis bibendum rhoncus cras
                  est. Ultrices iaculis turpis viverra urna nisi sollicitudin
                  mattis non tellus.
                </div>
                <div class="mt-2 font-medium text-left max-md:max-w-full">
                  20:00 PM ~ 22:00 PM
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
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div class="justify-center bg-white rounded-2xl max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div class="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
                  <div
                    class="mask grow w-full aspect-[1.09] bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-t-2xl md:rounded-none md:rounded-l-2xl"
                    :style="{
                      backgroundImage: `url(https://picsum.photos/324/298),linear-gradient( transparent 20%, transparent 75%)`,
                    }"
                  ></div>
                  <!-- <img
                  loading="lazy"
                  srcSet="https://picsum.photos/324/298"
                  class="grow w-full aspect-[1.09]"
                /> -->
                </div>
                <div
                  class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                >
                  <div
                    class="flex flex-col grow justify-center px-6 py-6 text-xl text-stone-500 max-md:px-5"
                  >
                    <div class="font-medium whitespace-nowrap">
                      2024/01/31 FRI
                    </div>
                    <div
                      class="mt-3 text-2xl font-semibold tracking-tight leading-7 text-blue-800"
                    >
                      語言共舞：跨足多國文化之旅
                    </div>
                    <div class="mt-3 text-base leading-6">
                      Eget ultricies nulla rutrum et mattis bibendum rhoncus
                      cras est. Ultrices iaculis turpis viverra urna nisi
                    </div>
                    <div class="mt-3 font-medium text-left">
                      20:00 PM ~ 22:00 PM
                    </div>
                    <button
                      class="justify-center self-start px-9 py-3 mt-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap bg-blue-800 border border-solid border-[color:var(--Black-Grey-500,#666)] rounded-[100px] max-md:px-5"
                    >
                      深入了解
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="justify-center mt-6 bg-white rounded-2xl max-md:max-w-full"
          >
            <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div
                  class="mask grow w-full aspect-[1.09] bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-t-2xl md:rounded-none md:rounded-l-2xl"
                  :style="{
                    backgroundImage: `url(https://picsum.photos/324/298),linear-gradient( transparent 20%, transparent 75%)`,
                  }"
                ></div>
                <!-- <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c6fd3342cf5ff0438cb634f772d222089590ee637ef3a3aaa782c6df912d0a9?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&"
                class="grow w-full aspect-[1.09]"
              /> -->
              </div>
              <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div
                  class="flex flex-col grow justify-center px-6 py-6 text-xl text-stone-500 max-md:px-5"
                >
                  <div class="font-medium whitespace-nowrap">
                    2024/01/31 FRI
                  </div>
                  <div
                    class="mt-3 text-2xl font-semibold tracking-tight leading-7 text-blue-800"
                  >
                    語言共舞：跨足多國文化之旅
                  </div>
                  <div class="mt-3 text-base leading-6">
                    Eget ultricies nulla rutrum et mattis bibendum rhoncus cras
                    est. Ultrices iaculis turpis viverra urna nisi
                  </div>
                  <div class="mt-3 font-medium text-left">
                    20:00 PM ~ 22:00 PM
                  </div>
                  <button
                    class="justify-center self-start px-9 py-3 mt-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap bg-blue-800 border border-solid border-[color:var(--Black-Grey-500,#666)] rounded-[100px] max-md:px-5"
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
    <div class="flex flex-col flex-wrap content-start p-5 max-md:px-5">
      <header class="max-md:max-w-full">
        <div
          class="flex flex-wrap gap-x-0 gap-y-4 max-md:flex-col max-md:gap-0 max-md:"
        >
          <div
            v-for="n in 8"
            :key="n"
            class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
          >
            <!--  -->
            <header
              class="flex flex-col justify-center text-xl font-medium text-white rounded-2xl max-w-[335px]"
            >
              <section
                class="flex overflow-hidden relative flex-col pt-12 w-full aspect-[0.75]"
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&"
                  class="object-cover absolute inset-0 size-full"
                />
                <div
                  class="flex relative flex-col justify-end px-5 pt-5 pb-8 mt-36 w-full"
                >
                  <time class="whitespace-nowrap" datetime="2024-01-31"
                    >2024/01/31 FRI</time
                  >
                  <h1
                    class="mt-2 text-2xl font-semibold tracking-tight leading-7"
                  >
                    語言共舞：跨足多國文化之旅
                  </h1>
                  <div class="mt-2 text-center">20:00 PM ~ 22:00 PM</div>
                  <button
                    class="justify-center px-9 py-3 mt-4 text font-bold tracking-wide capitalize whitespace-nowrap border border-solid border-[color:var(--Basic-White,#FFF)] rounded-[100px]"
                  >
                    深入了解
                  </button>
                </div>
              </section>
            </header>
          </div>
        </div>
      </header>
      <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
        <div
          class="flex flex-col grow justify-center text-xl font-medium text-white rounded-2xl max-md:mt-6"
        ></div>
      </div>
      <section class="mt-6 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow justify-center text-xl font-medium text-white rounded-2xl max-md:mt-6"
            ></div>
          </div>
          <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow justify-center text-xl font-medium text-white rounded-2xl max-md:mt-6"
            ></div>
          </div>
          <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow justify-center text-xl font-medium text-white rounded-2xl max-md:mt-6"
            ></div>
          </div>
          <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow justify-center text-xl font-medium text-white rounded-2xl max-md:mt-6"
            ></div>
          </div>
        </div>
      </section>
    </div>
    <!-- <section class="self-stretch p-6 max-md:px-5">
      <div class="flex card">
        <header
          v-for="n in 6"
          :key="n"
          :class="n"
          class="flex flex-col justify-center text-xl font-medium text-white rounded-2xl max-w-[330px]"
        >
          <section
            class="flex overflow-hidden relative flex-col pt-12 w-full aspect-[0.75]"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da5b45c39d68e1e19357ee85acffe91d015a70e65667565fb9ccefcc6e321d98?apiKey=9fc21b4d50c14bdb9f2af6f121469acd&"
              class="object-cover absolute inset-0 size-full"
            />
            <div
              class="flex relative flex-col justify-end px-5 pt-5 pb-8 mt-36 w-full"
            >
              <time class="whitespace-nowrap" datetime="2024-01-31"
                >2024/01/31 FRI</time
              >
              <h1 class="mt-2 text-2xl font-semibold tracking-tight leading-7">
                語言共舞：跨足多國文化之旅
              </h1>
              <div class="mt-2 text-center">20:00 PM ~ 22:00 PM</div>
              <button
                class="justify-center px-9 py-3 mt-4 text font-bold tracking-wide capitalize whitespace-nowrap border border-solid border-[color:var(--Basic-White,#FFF)] rounded-[100px]"
              >
                深入了解
              </button>
            </div>
          </section>
        </header>
      </div>
    </section> -->
  </div>
</template>
<style lang="scss" scoped>
.mask {
  mask-image: linear-gradient(black 75%, transparent 100%);
}
@media (min-width: 768px) {
  .mask {
    mask-image: linear-gradient(to right, black 75%, transparent 100%);
  }
}
</style>
