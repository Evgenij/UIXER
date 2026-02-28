<template>
	<div
		@click="selectCategory(props.data.name)"
		class="category p-1 px-2 border min-w-fit text-sm border-darkgray cursor-pointer"
		:class="props.active ? 'active' : ''"
	>
		{{ props.data.name }} [{{ props.data.count }}]
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
	active: Boolean,
});
const emit = defineEmits(["select"]);

const selectCategory = (name) => {
	emit("select", name);
};
</script>

<style lang="scss" scoped></style>
