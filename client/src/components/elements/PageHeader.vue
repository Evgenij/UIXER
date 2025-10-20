<template>
	<header class="page-header flex absolute top-0 w-full">
		<router-link :to="{ name: 'main' }">
			<div
				class="flex-none logo flex items-center justify-center font-regular text-2xl text-black"
			>
				UIXER
			</div>
		</router-link>
		<h1
			class="grow name flex items-center justify-center font-normal text-xl"
		>
			Yevhenii Yermolenko
		</h1>
		<div class="flex-none flex items-center justify-center">
			<label
				for="menu"
				class="toggle-menu cursor-pointer flex items-center justify-center"
			>
				<input
					ref="menu"
					type="checkbox"
					name="menu"
					id="menu"
					class="hidden menu"
				/>
				<div
					class="block-menu h-full w-full fixed flex flex-col space-y-16 items-center justify-center"
				>
					<h5 class="uppercase font-light text-2xl">menu</h5>
					<div
						class="links flex w-full flex-col"
						@mouseup="toggleMenu"
					>
						<RouterLink
							v-for="(link, index) in menuLinks"
							:key="index"
							:to="{ name: link.href }"
							class="block-menu__item font-light py-4 uppercase text-center"
						>
							{{ link.name }}
						</RouterLink>
					</div>
					<ThemeToggle direction="hor" />
					<ContactsLinks />
				</div>
				<span
					class="flex items-center justify-center uppercase text-lg text-black"
				>
					menu
				</span>
			</label>
		</div>
	</header>
</template>

<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
import ContactsLinks from "@/components/ContactsLinks.vue";

const menuLinks = [
	{
		name: "about me",
		href: "about",
	},
	{
		name: "skills",
		href: "skills",
	},
	{
		name: "projects",
		href: "projects",
	},
	{
		name: "contacts",
		href: "contacts",
	},
];

const toggleMenu = () => {
	$("#menu").prop("checked", false);
	// setTimeout(() => {
	//   $("#menu").prop("checked", false);
	// }, 1000);
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.page-header {
	z-index: 1100;
}

.logo {
	width: 100px;
	height: 100px;
}

.toggle-menu {
	height: 100px;
	width: 100px;
	background: $back-menu;
}

.block-menu {
	left: 0;
	top: 0;
	backdrop-filter: none;
	background: none;
	box-shadow: none;

	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s, visibility 0s 0.3s;

	& * {
		transition: 0.3s;
	}
}

input#menu:checked + .block-menu {
	backdrop-filter: blur(20px);
	opacity: 1;
	visibility: visible;
	transition: opacity 0.3s, visibility 0s;
}

.social-link {
	height: 50px;
}
</style>
