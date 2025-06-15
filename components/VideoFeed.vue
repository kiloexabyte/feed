<script setup lang="ts">
type VideoFeedProps = {
	videos: Video[];
};

const props = defineProps<VideoFeedProps>();
</script>

<template>
	<div class="m-2 w-2/3">
		<h2 class="mt-8 mb-4 text-xl font-bold">YouTube Videos</h2>
		<div class="scrollbar-hide h-4/5 overflow-y-auto">
			<!-- <ul class="space-y-4">
				<li
					v-for="video in props.videos"
					:key="video.link"
					class="w-full border-b pb-4"
				>
					<VideoItem
						:title="video.title"
						:publishedDate="useNuxtApp().$formatDate(video.date)"
						:author="video.author"
						:link="video.link"
					/>
				</li>
			</ul> -->
			<VideoCarousel :videos="videos" />
		</div>
	</div>
</template>
