<template>
  <div>
    <hr />
    this is news
    <ul>
      <ol v-for="item in list" :key="item.id">
        {{
          item.imageName
        }}
      </ol>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  async fetch() {
    // log on server
    const { data } = await fetch(
      'http://testapi.xuexiluxian.cn/api/slider/getSliders'
    ).then((res) => {
      // console.log('res News =====> ', res)
      return res.json()
    })
    this.list = data.list
  },
}
</script>
