<template>
	<div class="total">
		<div class="outer">
			<div class="imgBox">
				<img
					v-for="index of 5"
					:key="index"
					:src="dataList[1]"
					alt="星星"
				/>
			</div>
		</div>
		<div class="outer">
			<div class="totalBox">
				<div v-for="(item, i) in num" :key="i" class="box"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-stars',
	data() {
		return {
			dataList:[require('../assets/无星.png'),require('../assets/半星.png'),require('../assets/全星.png')],
			currentIndex: 1,
			num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		}
	},
	mounted(){
	}
}
</script>

<style scoped>
.total {
	position: relative;
	width: 500px;
	margin: 0 auto;
}
.imgBox {
	display: flex;
	justify-content: space-around;
	z-index: 9;
}
.totalBox {
	display: flex;
	z-index: -1;
}
.box {
	width: 50px;
	height: 64px;
	cursor: pointer;
	border: 1px solid black;
}
.outer{
  position: absolute;
  width: 100%;
}
</style>
