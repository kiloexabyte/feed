<script setup>
const { data: articles } = await useFetch("/api/news/rss");
const { data: youtubeVideos } = await useFetch("/api/news/youtube");

function formatDate(dateStr) {
	const date = new Date(dateStr);
	return isNaN(date) ? "Unknown date" : date.toLocaleDateString();
}
</script>

<template>
	<div class="flex h-full w-full flex-row p-6">
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
							:publishedDate="formatDate(item.date)"
							:link="item.link"
							:category="item.category"
						/>
					</li>
				</ul>
			</div>
		</div>

		<div class="m-2 w-2/3">
			<h2 class="mt-8 mb-4 text-xl font-bold">YouTube Videos</h2>
			<div class="scrollbar-hide h-4/5 overflow-y-auto">
				<ul class="space-y-4">
					<li
						v-for="video in youtubeVideos"
						:key="video.link"
						class="w-full border-b pb-4"
					>
						<VideoItem
							:title="video.title"
							:publishedDate="formatDate(video.publishedDate)"
							:author="video.author"
							:link="video.link"
						/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
