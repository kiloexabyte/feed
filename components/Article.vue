<script setup lang="ts">
type ArticleProps = {
	title: string
	author: string
	publishedDate: string
	link: string
}

const props = defineProps<ArticleProps>()
</script>

<template>
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
