<script setup>
defineProps({
	label: String,
});
const emit = defineEmits(["click"]);
</script>

<template>
	<button
		@click="$emit('click')"
		class="uix-button flex items-center border bg-white text-black hover:bg-gray-300 max-w-max"
	>
		<slot />
	</button>
</template>

<style scoped lang="scss"></style>
