<template>
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" stroke-width="1" fill-rule="evenodd" :fill="color">
			<path
				d="M1 4.75h2.736a3.728 3.728 0 007.195 0H23a1 1 0 000-2H10.931a3.728 3.728 0 00-7.195 0H1a1 1 0 000 2zM7.333 2a1.75 1.75 0 11-1.75 1.75A1.752 1.752 0 017.333 2zM23 11h-2.736a3.727 3.727 0 00-7.194 0H1a1 1 0 000 2h12.07a3.727 3.727 0 007.194 0H23a1 1 0 000-2zm-6.333 2.75a1.75 1.75 0 111.75-1.75 1.752 1.752 0 01-1.75 1.75zM23 19.25H10.931a3.728 3.728 0 00-7.195 0H1a1 1 0 000 2h2.736a3.728 3.728 0 007.195 0H23a1 1 0 000-2zM7.333 22a1.75 1.75 0 111.75-1.75A1.753 1.753 0 017.333 22z"
			/>
		</g>
	</svg>
</template>

<script>
export default {
	name: "IconFilters",
	props: { color: String }
}
</script>
