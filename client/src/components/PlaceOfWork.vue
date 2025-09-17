<template>
	<div
		class="work-place border border-1 border-darkgray flex flex-col space-y-3 h-full"
	>
		<div class="work-place__content space-y-4 py-4 px-5 pb-0 h-full">
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

				<a
					target="_blank"
					:href="props.data.company.href"
					class="company-data flex items-center group hover:cursor-pointer"
				>
					<p
						class="font-regular text-color-gray group-hover:underline"
					>
						{{ props.data.company.name }}
					</p>
					<i
						class="bx bx-link text-xl text-sky-700 group-hover:text-sky-400 ml-1"
					></i>
				</a>
			</header>
		</div>
		<button
			@click="visible = true"
			class="text-left text-sm opacity-50 px-5 py-3 hover:bg-white/[1%] hover:opacity-100"
		>
			Show more
		</button>
	</div>

	<!-- Info modal -->

	<Dialog
		v-model:visible="visible"
		modal
		:draggable="false"
		:style="{ width: '50rem' }"
		:closeOnEscape="true"
		:dismissableMask="true"
	>
		<template #container>
			<div
				class="info-modal modal-content bg-transparent"
				:style="{
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					border: '1px solid rgba(255,255,255,0.1)',
				}"
			>
				<header
					class="p-6 py-4 flex flex-col space-y-3 justify-start border-b"
				>
					<div class="general-info flex flex-col space-y-1">
						<h4 class="text-2xl">{{ props.data.position }}</h4>
						<div class="year flex">
							<div
								v-if="props.data.current"
								class="current-label flex space-x-2 items-center h-[22px]"
							>
								<div
									class="flex items-center h-full justify-center"
								>
									<span class="relative flex size-4">
										<span
											class="dot absolute inline-flex h-full w-full animate-ping rounded-full primary-background opacity-75"
										></span>
										<span
											class="dot relative inline-flex left-[2px] top-[2px] size-3 rounded-full primary-background"
										></span>
									</span>
								</div>

								<p class="leading-none">Current</p>
							</div>
							<span v-else class="font-light text-color-gray">{{
								props.data.year
							}}</span>
						</div>
					</div>
					<a
						target="_blank"
						:href="props.data.company.href"
						class="company-data flex items-center group hover:cursor-pointer opacity-50"
					>
						<p
							class="font-regular text-color-gray group-hover:underline"
						>
							{{ props.data.company.name }}
						</p>
						<i
							class="bx bx-link text-xl text-sky-700 group-hover:text-sky-400 ml-1"
						></i>
					</a>
				</header>
				<main class="p-6 flex">dfgdf</main>
				<footer class="flex justify-between p-6 border-t">
					<Button
						label="Cancel"
						text
						severity="secondary"
						@click="visible = false"
						autofocus
					/>
					<Button
						label="Save"
						variant="outlined"
						severity="secondary"
						@click="visible = false"
						autofocus
					/>
				</footer>
			</div>
		</template>
	</Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
import { ref } from "vue";

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
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.current-label .dot {
	background-color: $primary;
}
</style>
