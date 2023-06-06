<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref, defineProps } from "vue";
const modules = [Autoplay, Pagination, Navigation, A11y];
const props = defineProps({
	imglist: Object
})
const imgs = ref(props.imglist)
console.log('props.imglist', props.imglist);
</script>
<template>
	<div>
		<swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true" :pagination="{
			clickable: true,
		}" :autoplay="{
	delay: 2500,
	disableOnInteraction: false,
}" :navigation="true" :modules="modules" class="mySwiper" v-if="imgs">
			<swiper-slide v-for="(item, index) in imgs" :key="index">
				<div style="width: 100%" v-if="item">
					<img style="width: 100%; height: 100%" alt="图" :src="item.image" />
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<style lang="less" scoped>
.mySwiper {
	width: 100%;
	height: 100%;
}
</style>

