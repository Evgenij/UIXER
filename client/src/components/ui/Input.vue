<template>
	<div class="input">
		<textarea v-if="isTextarea" :type :name :id :placeholder :class="{'error': invalid}"
		          v-model="model"></textarea>
		<input v-else :type :name :id :placeholder :class="{'error': invalid}"
		       v-model="model">
		<div class="wrapper-error flex items-center mt-2 space-x-1" v-if="invalid">
			<i class='bx bx-error-circle'></i>
			<span v-for="error of errors" :key="error.$uid" class="block text-sm font-light">
				{{error.$message}}
			</span>
		</div>
	</div>

</template>

<script setup>
	defineProps({
		id: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			required: true
		},
		errors: Array,
		invalid: Boolean,
		isTextarea: Boolean
	})

	const model = defineModel()
</script>

<style scoped lang="scss">

	@import "../../assets/variables";

	input, textarea {
		padding: 14px 18px;
		outline: none;
		width: 100%;
		border: 1px solid $lines;
		background: $background;

		&:not(.error) :hover {
			border-color: $primary;
		}

		&:not(.error) :focus {
			border-color: $primary;
		}
	}

	textarea {
		height: 100px;
		max-height: 150px;
	}

	.error {
		border-color: $red;
	}

	.wrapper-error {
		color: $red;
	}
</style>