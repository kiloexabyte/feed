<script setup>
const { data: articles } = await useFetch("/api/news/rss");
const { data: youtubeVideos } = await useFetch("/api/news/youtube");
</script>

<template>
	<div class="flex h-screen w-screen flex-row">
		<NewsFeed :articles="articles" />
		<VideoFeed :videos="youtubeVideos" />
	</div>
</template>
