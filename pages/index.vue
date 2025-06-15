<script setup>
const { data: articles } = await useFetch("/api/rss");

function formatDate(dateStr) {
	const date = new Date(dateStr);
	return isNaN(date) ? "Unknown date" : date.toLocaleDateString();
}
</script>

<template>
	<div class="p-6">
		<h1 class="mb-4 text-2xl font-bold">News Feed</h1>
		<ul class="space-y-4">
			<li v-for="item in articles" :key="item.link" class="w-1/2 border-b pb-2">
				<div>
					{{ item.category }}
				</div>
				<Article
					:title="item.title"
					:author="item.author"
					:published-date="formatDate(item.date)"
					:link="item.link"
				/>
			</li>
		</ul>
	</div>
</template>
