<script setup lang="ts">
type NewsFeedProps = {
	articles: Article[];
};

defineProps<NewsFeedProps>();
</script>

<template>
	<div class="h-screen w-1/3">
		<h1 class="mb-4 text-2xl font-bold">News Feed</h1>
		<div class="scrollbar-hide h-4/5 overflow-y-auto">
			<ul class="space-y-4">
				<li
					v-for="item in articles"
					:key="item.link"
					class="w-full border-b pb-2"
				>
					<Article
						:title="item.title"
						:author="item.author"
						:publishedDate="useNuxtApp().$formatDate(item.date)"
						:link="item.link"
						:category="item.category"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>
