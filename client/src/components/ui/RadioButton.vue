<template>
	<div class="wrapper-radio">
		<input
			type="radio"
			:name
			:id
			:value="id"
			:checked
			v-model="model"
			@change="$emit('update:modelValue', $event.target.value)"
		/>
		<label :for="id" class="block cursor-pointer px-8 py-5 pl-16">
			<slot />
		</label>
	</div>
</template>

<script setup>
defineProps({
	id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	checked: Boolean,
});

const model = defineModel();
</script>

<style scoped lang="scss">
@import "../../assets/variables";

.wrapper-radio {
	position: relative;
	width: fit-content;

	input[type="radio"] {
		display: none;
	}

	input[type="radio"] + label {
		&:before,
		&:after {
			content: "";
			position: absolute;
			display: block;
			border-radius: 50%;
			transition: 0.3s;
		}

		&:before {
			left: 24px;
			top: 22px;
			width: 22px;
			height: 22px;
		}

		&:after {
			left: 29px;
			top: 27px;
			width: 12px;
			height: 12px;
			background: transparent;
		}
	}
}
</style>
