<script setup></script>

<template>
	<div
		class="badgeStatus flex items-center gap-2 w-fit p-1 px-2 rounded-full"
	>
		<span class="relative flex align-center justify-center size-3">
			<span
				class="absolute circle-pulse inline-flex h-full w-full animate-ping rounded-full opacity-75"
			></span>
			<span
				class="relative circle-stable inline-flex size-3 rounded-full"
			></span>
		</span>
		<span class="text-sm font-bold label">In developing</span>
	</div>
</template>

<style scoped lang="scss"></style>
