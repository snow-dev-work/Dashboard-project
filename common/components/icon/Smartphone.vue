<template>
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" stroke-width="1" fill-rule="evenodd" :fill="color">
			<path
				d="M15 0H9a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h6a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM9 2h6a3 3 0 013 3v11H6V5a3 3 0 013-3zm6 20H9a3 3 0 01-3-3v-1h12v1a3 3 0 01-3 3z"
			/>
			<circle cx="12" cy="20" r="1" />
		</g>
	</svg>
</template>

<script>
export default {
	name: "IconSmartphone",
	props: { color: String }
}
</script>
