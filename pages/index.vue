<script setup>
const { data: articles } = await useFetch("/api/news/rss");
const { data: youtubeVideos } = await useFetch("/api/news/youtube");

function formatDate(dateStr) {
	const date = new Date(dateStr);
	return isNaN(date) ? "Unknown date" : date.toLocaleDateString();
}

// Extract YouTube video ID from the video link
function getYouTubeVideoId(link) {
	const url = new URL(link);
	return url.searchParams.get("v") || url.pathname.split("/").pop();
}
</script>

<template>
	<div class="flex h-full w-full flex-row p-6">
		<div class="w-1/3">
			<h1 class="mb-4 text-2xl font-bold">News Feed</h1>
			<ul class="space-y-4">
				<li
					v-for="item in articles"
					:key="item.link"
					class="w-full border-b pb-2"
				>
					<div>
						{{ item.category }}
					</div>
					<div class="w-full">
						<Article
							:title="item.title"
							:author="item.author"
							:published-date="formatDate(item.date)"
							:link="item.link"
						/>
					</div>
				</li>
			</ul>
		</div>

		<div class="m-2 w-2/3">
			<h2 class="mt-8 mb-4 text-xl font-bold">YouTube Videos</h2>
			<ul class="space-y-4">
				<li
					v-for="video in youtubeVideos"
					:key="video.link"
					class="w-full border-b pb-4"
				>
					<div class="mb-2">
						<a
							:href="video.link"
							target="_blank"
							class="text-lg font-semibold hover:underline"
						>
							{{ video.title }}
						</a>
					</div>
					<div class="mb-2 text-sm text-gray-500">
						{{ video.author }} · {{ formatDate(video.date) }}
					</div>
					<!-- Embed YouTube video -->
					<iframe
						:src="`https://www.youtube.com/embed/${getYouTubeVideoId(video.link)}`"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="aspect-video w-full"
					></iframe>
				</li>
			</ul>
		</div>
	</div>
</template>
