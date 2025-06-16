<script setup lang="ts">
type VideoFeedProps = {
	videos: Video[];
};

defineProps<VideoFeedProps>();
</script>

<template>
	<div class="m-2 w-2/3">
		<h2 class="mt-8 mb-4 text-xl font-bold">YouTube Videos</h2>
		<div class="scrollbar-hide h-4/5 overflow-y-auto">
			<VideoCarousel :videos="videos" />
		</div>
	</div>
</template>
