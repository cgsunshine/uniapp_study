<template>
	<view>
		组件测试
		<view>组件的name：{{name}}</view>
		<view>组件的content：{{content}}</view>
		<slot></slot>
		<button @click="handleChange">修改content</button>
	</view>
</template>

<script setup>
	import { defineProps,defineEmits } from 'vue'
	// defineProps(['name','content'])
	defineProps({
		name:String,
		content:{
			type:String,
			default: () => {
				return '默认值'
			}
		}
	})
	const emit = defineEmits(['changeData'])
	const handleChange = () =>{
		emit('changeData','修改后数据')
	}
	
	

</script>

<style>

</style>