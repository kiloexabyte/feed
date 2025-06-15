<script lang="ts" setup>
type VideoItemProps = {
	title: string;
	publishedDate: string;
	author: string;
	link: string;
};

const props = defineProps<VideoItemProps>();

// Extract YouTube video ID from the video link
function getYouTubeVideoId(link: string) {
	const url = new URL(link);
	return url.searchParams.get("v") || url.pathname.split("/").pop();
}
</script>

<template>
	<div class="flex w-full flex-col">
		<div class="mb-2">
			<a
				:href="props.link"
				target="_blank"
				class="text-lg font-semibold hover:underline"
			>
				{{ props.title }}
			</a>
		</div>
		<div class="mb-2 text-sm text-gray-500">
			{{ props.author }} · {{ props.publishedDate }}
		</div>
		<!-- Embed YouTube video -->
		<iframe
			:src="`https://www.youtube.com/embed/${getYouTubeVideoId(props.link)}`"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="aspect-video w-full"
		></iframe>
	</div>
</template>
