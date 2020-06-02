<template>
	<!-- <div>
		<my-upload 
		action='http://localhost:3038/acceptimg'
		/>
	</div> -->
	<!-- <div>
		<my-stars class="testBox"></my-stars>
	</div> -->
	<div>
		<input v-model="message" placeholder="edit me" />
		<p>Message is: {{ message }}</p>
	</div>
</template>

<script>
import myUpload from '../components/my-upload'
import myStars from '../components/my-stars'
export default {
	components: {
		'my-upload': myUpload,
		'my-stars': myStars,
	},
	data() {
		return {
			message:''
		}
	},
	mounted() {},
}
</script>

<style scoped></style>
