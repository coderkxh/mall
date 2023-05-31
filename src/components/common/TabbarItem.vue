<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()


const prop = defineProps({
	path: String,
	activecolor: {
		type: String,
		default: 'red'
	}
})
const isActive = computed(() => {
	return route.path.indexOf(prop.path) !== -1
})
const jump = () => {
	router.push({
		path: prop.path
	})
}
const isactivecolor = computed(() => {
	return isActive.value ? { color: prop.activecolor } : {}
})


</script>
<template>
	<div class="tabbaritem" @click="jump">
		<div v-if="isActive">
			<slot name="itemicon"></slot>
		</div>
		<div v-else>
			<slot name="itemiconactive"></slot>
		</div>

		<div :style="isactivecolor">
			<slot name="itemtext"></slot>

		</div>
	</div>
</template>
<style scoped>
.tabbaritem {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.active {
	color: #06e127;
}
</style>