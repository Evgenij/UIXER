<template>
	<div
		class="work-place border border-1 flex flex-col space-y-3 h-full group cursor-pointer"
		@click="visible = true"
	>
		<div class="work-place__content space-y-3 py-4 px-5 pb-0 h-full">
			<div class="year flex">
				<div
					v-if="props.data.current"
					class="current-label flex space-x-2 items-center h-[22px]"
				>
					<div class="flex items-center h-full justify-center">
						<span class="relative flex size-4">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full primary-background opacity-75"
							></span>
							<span
								class="relative inline-flex left-[2px] top-[2px] size-3 rounded-full primary-background"
							></span>
						</span>
					</div>

					<p class="leading-none">Current</p>
				</div>
				<span v-else class="font-light text-color-gray">{{
					props.data.year
				}}</span>
			</div>

			<header class="flex flex-col space-y-2">
				<h3 class="header__main font-bold text-xl leading-normal">
					{{ props.data.position }}
				</h3>

				<div class="flex items-center">
					<p class="font-regular text-color-gray">
						{{ props.data.company.description }} -
						{{ props.data.company.name }}
						<a
							target="_blank"
							:href="props.data.company.href"
							@mousedown="visible = false"
						>
							<i class="bx bx-link-external"></i>
						</a>
					</p>
				</div>
			</header>
		</div>
		<div
			@click="visible = true"
			class="label-more text-left opacity-50 text-sm px-5 py-3 group-hover:opacity-100 group-hover:bg-white group-hover:text-black"
		>
			Show more
		</div>
	</div>

	<!-- Info modal -->
	<Modal
		:isOpen="visible"
		@modal-close="visible = !visible"
		@submit="submitHandler"
		name="first-modal"
	>
		<template #header
			><header class="flex flex-col space-y-1 justify-start">
				<h3 class="text-2xl">{{ props.data.position }}</h3>
				<div
					v-if="props.data.current"
					class="current-label flex space-x-2 items-center h-[22px]"
				>
					<div class="flex items-center h-full justify-center">
						<span class="relative flex size-3">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full primary-background opacity-75"
							></span>
							<span
								class="relative inline-flex left-[2px] top-[2px] size-2 rounded-full primary-background"
							></span>
						</span>
					</div>

					<p class="leading-none text-color-gray">Current</p>
				</div>
				<span v-else class="font-light text-color-gray">{{
					props.data.year
				}}</span>
			</header>
		</template>
		<template #content>
			<div class="main-info flex flex-col space-y-6">
				<div class="info-block flex flex-col space-y-1">
					<span class="text-sm font-light opacity-50"> Company </span>
					<div class="flex items-center space-x-2">
						<p class="font-regular">
							{{ props.data.company.name }}
							<a target="_blank" :href="props.data.company.href">
								<i
									class="bx bx-link-external hover:text-sky-500 ml-1"
								></i>
							</a>
						</p>
						<p class="text-color-gray">
							- {{ props.data.company.description }}
						</p>
					</div>
				</div>
				<div
					class="info-block flex flex-col space-y-1"
					v-if="props.data.responsibilities.length != 0"
				>
					<span class="text-sm font-light opacity-50">
						Responsibility of
					</span>
					<ul class="list-disc list-inside">
						<li
							v-for="item in props.data.responsibilities"
							class="mb-2"
						>
							{{ item }}
						</li>
					</ul>
				</div>
				<div
					class="info-block flex flex-col space-y-1"
					v-if="props.data.tools.length != 0"
				>
					<span class="text-sm font-light opacity-50">
						The instruments used
					</span>
					<div class="list">
						<span v-for="(tool, index) in props.data.tools"
							>{{ tool
							}}{{
								index != props.data.tools.length - 1 ? ", " : ""
							}}
						</span>
					</div>
				</div>
				<div
					class="info-block flex flex-col space-y-1"
					v-if="props.data.projects.length != 0"
				>
					<span class="text-sm font-light opacity-50">Projects</span>
					<div class="list flex flex-wrap gap-2">
						<a
							:href="project.href"
							target="_blank"
							class="underline text-blue-500 hover:text-blue-400 inline-block min-w-max"
							v-for="(project, index) in props.data.projects"
						>
							<span class="opacity-70">[{{ index + 1 }}]</span>
							{{ project.name }}
						</a>
					</div>
				</div>
			</div>
		</template>
		<template #footer
			><Button class="gray" @click="visible = !visible"
				>Close</Button
			></template
		>
	</Modal>
</template>

<script setup>
import { ref } from "vue";
import Button from "./ui/Button.vue";
import Modal from "./ui/Modal.vue";

const visible = ref(false);

const props = defineProps({
	data: {
		position: String,
		year: String,
		company: String,
		description: Array,
		current: Boolean,
	},
});

// const openModal = () => {
// 	isModalOpened.value = true;
// };
// const closeModal = () => {
// 	isModalOpened.value = false;
// };

// const submitHandler = () => {
// 	//here you do whatever
// };
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.current-label .dot {
	background-color: $primary;
}

.work-place:hover {
	$effect3D: 6px;
	transform: translate($effect3D * -1, $effect3D * -1);
}
</style>
