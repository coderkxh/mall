<script setup>
import NavBar from 'components/common/navbar/NavBar.vue'
</script>
<template>
	<div class="home">
		<NavBar class="homenav">
			<template #center>
				购物街
			</template>
		</NavBar>
		home
	</div>
</template>
<style lang="less" scoped>
.home {
	.homenav {
		background-color: @color;
		color: white;
	}
}
</style>