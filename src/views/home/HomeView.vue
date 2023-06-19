
<template>
	<div class="home">
		<NavBar class="homenav">
			<template #center>
				购物街
			</template>
		</NavBar>
		<Swiper :imglist=result v-if="result">
		</Swiper>


		home
	</div>
</template>
<script setup>
import NavBar from 'components/common/navbar/NavBar.vue'
import Swiper from 'components/content/Swiper.vue'
import { getHomeMultidata } from 'network/home.js'
import { ref } from 'vue'
let result = ref();
getHomeMultidata().then(res => {
	if (res.status === 200) {
		result.value = ref(res.data.data.banner.list)
	}
})
</script>
<style lang="less" scoped>
.home {
	.homenav {
		background-color: @color;
		color: white;
	}
}
</style>