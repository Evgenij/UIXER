<template>
	<footer
		name="footer"
		class="page-footer flex items-center justify-between absolute bottom-0 w-full"
	>
		<div class="positions flex items-center space-x-6">
			<p class="font-light">UI/UX designer</p>
			<span class="divider"></span>
			<p class="font-light">Frontend developer</p>
		</div>
		<div class="social-links flex items-center space-x-10">
			<a
				target="_blank"
				v-for="link in socialLinks"
				:key="link.id"
				:href="link.href"
				class="font-light link white underline-offset-4 hover:underline"
				>{{ link.label }}</a
			>
		</div>
	</footer>
</template>

<script setup>
//import { onMounted } from "vue";

const socialLinks = [
	{
		id: 1,
		href: "https://github.com/Evgenij",
		label: "GitHub",
	},
	{
		id: 2,
		href: "https://www.behance.net/_uixer_",
		label: "Behance",
	},
	{
		id: 3,
		href: "https://www.linkedin.com/in/yevhenii-yermolenko/",
		label: "LinkedIn",
	},
	{
		id: 4,
		href: "https://www.instagram.com/uixer.design/",
		label: "Instagram",
	},
];
</script>

<style lang="scss">
@import "../../assets/variables";

.page-footer {
	z-index: 1000;
	padding: 0 140px;
	height: 100px;
}

span.divider {
	height: 18px;
	width: 1px;
}
</style>
