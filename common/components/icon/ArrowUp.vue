<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="none" stroke-width="1" fill-rule="evenodd" :fill="color">
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
		</g>
	</svg>
</template>

<script>
export default {
	name: "IconArrowUp",
	props: { color: String },
}
</script>
