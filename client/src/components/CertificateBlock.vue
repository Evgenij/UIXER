<template>
	<div
		class="work-place border border-1 border-darkgray flex flex-col space-y-3 h-full group cursor-pointer hover:border-white"
		@click="visible = true"
	>
		<div class="work-place__content space-y-2 py-4 px-5 h-full">
			<div class="category flex font-light text-color-gray text-sm">
				{{ props.data.category }}
			</div>
			<h5 class="header__main font-bold text-xl leading-normal">
				{{ props.data.name }}
			</h5>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		name: String,
		category: String,
		list: Array,
	},
});
</script>

<style lang="scss" scoped></style>
