<template>
	<div class="total">
		<div class="file-box">
			<label class="label" for="uploadCpn">选择图片</label>
			<label class="btn" @click="upload">点击上传</label>
			<input
				id="uploadCpn"
				type="file"
				ref="file"
				accept="image/*"
				@change="test"
			/>
		</div>

		<div class="showBox">
			<!-- <img v-if="src" v-bind:src="src" alt="预览图" /> -->
		</div>
	</div>
</template>
<script>
import qs from 'qs'
export default {
	name: 'my-upload',
	props: {
		action: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			src: '',
		}
	},
	methods: {
		upload() {
			let fileData = this.$refs.file.files[0]
			let read = new FileReader()
			read.readAsDataURL(fileData)
			read.onload = (e) => {
				let obj = {
					src: e.target.result,
				}
				obj = qs.stringify(obj)
				let config = {
					method: 'post',
					url: this.action,
					data: obj,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					},
				}
				this.$axios(config).then((res) => {
					console.log(res)
				})
			}
		},
		test(e) {
			let fileData = this.$refs.file.files[0]
			let read = new FileReader()
			read.readAsDataURL(fileData)
			read.onload = (e) => {
				this.src = e.target.result
			}
		},
	},
}
</script>

<style scoped>
.total{
  width: 300px;
  height: 200px;
  margin: 0 auto;
}
.file-box {
	display: flex;
	position: relative;
}

.label {
	padding: 5px 10px;
	background: #00b0f0;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
.btn {
	padding: 5px 10px;
	background: #00b0f0;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-left: 10px;
}
#uploadCpn {
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	z-index: -1;
}
.showName {
	margin-top: 10px;
}
.showBox{
  width: 300px;
  height: 150px;
  background-color: red;
}
</style>
