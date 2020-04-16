<template>
	<div>
		<div><input type="file" ref="file" /></div>
		<button @click="upload()">上传文件</button>
	</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
	data() {
		return {}
	},
	methods: {
		upload() {
			let fileData = this.$refs.file.files[0]
			let read = new FileReader()
			read.readAsDataURL(fileData)
			read.onload = e => {
        let obj = {
          src:e.target.result
        }
        obj = qs.stringify(obj)
				let config = {
					method: 'post',
					url: 'http://localhost:3038/acceptimg',
					data: obj,
					headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
					}
				}
				axios(config).then(res => {
					console.log(res)
				})
			}
		}
	}
}
</script>

<style></style>
