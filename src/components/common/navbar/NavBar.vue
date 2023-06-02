<template>
	<div class="navbar">
		<div class="left">
			<slot name="left">
			</slot>
		</div>
		<div class="center">
			<slot name="center">
			</slot>
		</div>
		<div class="right">
			<slot name="right">
			</slot>
		</div>
	</div>
</template>
<style scoped>
.navbar {
	display: flex;
	line-height: 44px;
	text-align: center;
	box-shadow: 0 1px 0 rgba(222, 222, 222, .5);
}

.left {
	width: 60px;
}

.center {
	flex: 1;
}

.right {
	width: 60px;
}
</style>