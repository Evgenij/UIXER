<template>
	<router-link :to="toProject(props.data.name)"
		><div
			class="project flex flex-col relative group cursor-pointer h-full"
		>
			<div class="wrapp-img h-[200px] relative" :style="dynamicImage">
				<div
					class="label font-bold absolute px-2 py-1 text-xs text-white top-2 left-2 bg-black"
				>
					{{
						props.data.inDeveloping
							? "In developing"
							: props.data.date
					}}
				</div>
			</div>
			<main class="px-4 py-3 flex flex-col space-y-3 justify-between">
				<header class="flex flex-col space-y-1 h-full">
					<div class="text-xl">{{ props.data.name }}</div>
					<p class="opacity-50 font-light">
						{{ props.data.subtitle }}
					</p>
				</header>

				<span
					class="primary-font opacity-0 group-hover:opacity-100 transition-all flex items-center"
					>Show more <i class="bx bx-right-arrow-alt ml-1"></i
				></span>
			</main></div
	></router-link>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	data: {
		inDeveloping: Boolean,
		name: String,
		secondName: String,
		subtitle: String,
		poster: String,
		date: String,
	},
});

const dynamicImage = ref({
	backgroundImage: `url(${props.data.poster})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
});

const toProject = (name) => {
	return {
		name: "project",
		params: { name },
	};
};
</script>

<style lang="scss" scoped></style>
