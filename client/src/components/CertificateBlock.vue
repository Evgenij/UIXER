<template>
	<div
		class="certificate border border-1 flex cursor-pointer"
		@click="opened = !opened"
	>
		<div class="certificate__content space-y-2 py-4 px-5 h-full w-full">
			<span class="category flex font-light text-color-gray text-sm">
				{{ props.data.category }}
			</span>
			<h5 class="header__main font-bold text-xl leading-normal">
				{{ props.data.name }}
			</h5>

			<div
				v-if="opened"
				class="list flex flex-col gap-2 border-t border-1 pt-3"
			>
				<a
					v-for="value in props.data.list"
					:key="value.name"
					:href="value.href"
					target="_blank"
					class="font-regular text-base text-blue-500 hover:underline group"
				>
					{{ value.name }}

					<i
						class="opacity-0 group-hover:opacity-100 group-hover:no-underline bx bx-link-external"
					></i>
				</a>
			</div>
		</div>
		<button class="h-full px-5">
			<i v-if="!opened" class="text-2xl bx bx-chevron-down"></i>
			<i v-else class="text-2xl bx bx-chevron-up"></i>
		</button>

		<!-- <Accordion class="project__accordion">
			<AccordionTab
				header="More info"
				contentClass="project__accordion accordion"
			>
				<div class="flex flex-col gap-2">
					<div class="flex flex-col gap-2 pl-5">
						<div class="wrapp-info-paragraph relative">
							<p class="font-light opacity-70">
								{{ item }}
							</p>
						</div>
					</div>
					<a
						href=""
						class="inline-block p-2 font-light hover:underline underline-offset-4"
						>Show more ></a
					>
				</div>
			</AccordionTab>
		</Accordion> -->
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	data: {
		name: String,
		category: String,
		list: Array,
	},
});

const opened = ref(false);
</script>

<style lang="scss" scoped></style>
