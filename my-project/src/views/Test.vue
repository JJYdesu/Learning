<template>
	<div>
		<my-upload 
		action='http://localhost:3038/acceptimg'
		/>
	</div>
</template>

<script>
import myUpload from '../components/my-upload'
export default {
	components: {
		'my-upload': myUpload,
	},
	data() {
		return {
			testTitle: '',
		}
	},
}
</script>

<style></style>
