<template>
	<div :class="compClasses">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps(["classes"]);
const compClasses = [
	"tool-badge skill px-4 p-3 border w-fit",
	props.classes,
].join(" ");
</script>
