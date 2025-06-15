<script lang="ts" setup>
type VideoCarousel = {
	videos: Video[];
};

const props = defineProps<VideoCarousel>();
const vidPointer = ref<number>(0);
const currentVid = ref<Video>(props.videos[vidPointer.value]);

const increasePointer = () => {
	vidPointer.value = (vidPointer.value + 1) % props.videos.length;
	currentVid.value = props.videos[vidPointer.value];
};

const decreasePointer = () => {
	vidPointer.value =
		(vidPointer.value - 1 + props.videos.length) % props.videos.length;
	currentVid.value = props.videos[vidPointer.value];
};
</script>

<template>
	<div class="flex flex-row">
		<button @click="decreasePointer">prev</button>
		<div class="flex w-full flex-col items-center">
			<VideoItem
				:title="currentVid.title"
				:publishedDate="useNuxtApp().$formatDate(currentVid.date)"
				:author="currentVid.author"
				:link="currentVid.link"
			/>
			<div>
				{{ vidPointer + 1 }}
			</div>
		</div>
		<button @click="increasePointer">next</button>
	</div>
</template>
