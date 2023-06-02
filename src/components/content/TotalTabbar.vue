<script setup>
import TabbarItem from '../common/tabbar/TabbarItem.vue';

</script>
<template>
	<div class="totaltabbar">
		<div class="item">
			<TabbarItem path="/home" activecolor="green">
				<template #itemicon>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon1.png" alt="">
					</div>
				</template>
				<template #itemiconactive>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon11.png" alt="">
					</div>
				</template>
				<template #itemtext>
					<div>首页</div>
				</template>
			</TabbarItem>
		</div>
		<div class="item" >
			<TabbarItem path="/fenlei" activecolor="green">
				<template #itemicon>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon2.png" alt="">
					</div>
				</template>
				<template #itemiconactive>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon21.png" alt="">
					</div>
				</template>
				<template #itemtext>分类</template>
			</TabbarItem>
		</div>
		<div class="item" >
			<TabbarItem path="/shopcard" activecolor="green">
				<template #itemicon>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon3.png" alt="">
					</div>
				</template>
				<template #itemiconactive>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon31.png" alt="">
					</div>
				</template>
				<template #itemtext>购物</template>
			</TabbarItem>
		</div>
		<div class="item" >
			<TabbarItem path="/profile" activecolor="green">
				<template #itemicon>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon4.png" alt="">
					</div>
				</template>
				<template #itemiconactive>
					<div class="imgsize">
						<img src="~assets/img/tabbar/icon41.png" alt="">
					</div>
				</template>
				<template #itemtext>个人中心</template>
			</TabbarItem>
		</div>
	</div>
</template>
<style scoped>
.totaltabbar {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.item {
	width: 100%;
	height: 100%;
	color: rgb(78, 80, 76);
}

.imgsize img {
	display: block;
	width: 20px;
}
</style>