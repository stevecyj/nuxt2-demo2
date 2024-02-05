<template>
  <div>
    <ul role="list">
      {#each people as person}
      <li class="group/item hover:bg-slate-100 ...">
        <img src="{person.imageUrl}" alt="" />
        <div>
          <a href="{person.url}">{person.name}</a>
          <p>{person.title}</p>
        </div>
        <a
          class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
          href="tel:{person.phone}"
        >
          <span class="group-hover/edit:text-gray-700 ...">Call</span>
          <svg
            class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ..."
          >
            <!-- ... -->
          </svg>
        </a>
      </li>
      {/each}
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
}
</script>
