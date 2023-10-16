<template>
  <div class="city">
    <area-select v-model="areaSelectModel" :data="options" :clearable="clearable" :default-title="defaultTitle" :select-field="fields" @handleSelected="handleSelected"/>
  </div>
</template>
<script lang="ts" setup>
import { areaSelect } from '@/components/areaSelect'
import { ref } from 'vue'
import { options } from './data'
const defaultTitle = '请选择'
const clearable = true
const areaSelectModel = ref<number[]>()
const fields: {
  name: string,
  code: string | number,
  children: string
} = {
  name: 'name',
  code: 'code',
  children: 'children'
}
const handleSelected = (value: any) => {
  console.log('value', value)
}

</script>

<style lang="less" scoped>
.city {
    display: flex;
    margin-top: 150px;
    justify-content: center;
}
</style>
