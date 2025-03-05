<template>
	<div :class="compClasses">
		<slot></slot>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["classes"]);

const compClasses = ["tool-badge px-4 p-3 border w-fit", props.classes].join(
	" "
);
</script>
