<template>
	<div :class="compClasses">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps(["classes"]);
const compClasses = [
	"tool-badge text-sm skill px-2 p-1 border w-fit",
	props.classes,
].join(" ");
</script>
