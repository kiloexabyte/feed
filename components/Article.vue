<script setup lang="ts">
type ArticleProps = {
	title: string;
	author: string;
	publishedDate: string;
	link: string;
	category: string;
};

const props = defineProps<ArticleProps>();
</script>

<template>
	<div>
		{{ props.category }}
	</div>
	<a
		:href="props.link"
		target="_blank"
		class="text-lg font-semibold hover:underline"
	>
		{{ props.title }}
	</a>
	<div class="text-sm text-gray-500">
		{{ props.author }} · {{ props.publishedDate }}
	</div>
</template>
