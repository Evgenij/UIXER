<script setup>
defineProps({
	label: String,
});
const emit = defineEmits(["click"]);
</script>

<template>
	<button
		@click="$emit('click')"
		class="uix-button border bg-white text-black hover:bg-gray-300"
	>
		<slot />
	</button>
</template>

<style scoped lang="scss"></style>
