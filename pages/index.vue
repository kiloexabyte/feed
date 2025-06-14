<script setup>
const { data: articles } = await useFetch('/api/rss')

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return isNaN(date) ? 'Unknown date' : date.toLocaleDateString()
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">News Feed</h1>
    <ul class="space-y-4">
      <li v-for="item in articles" :key="item.link" class="border-b pb-2 w-1/2">
        <Article
            :title="item.title"
            :author="item.author"
            :published-date="formatDate(item.date)"
            :summary="item.summary"
            :link="item.link"
        />
      </li>
    </ul>
  </div>
</template>