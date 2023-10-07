<template>
  <div class="city">
    <area-select :data="options" :default-title="defaultTitle" :select-field="fields" @handleSelected="handleSelected"/>
  </div>
</template>
<script lang="ts" setup>
import { areaSelect } from '@/components/areaSelect'
import { options } from './data'
const defaultTitle = '请选择'
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
  margin-top: 150px;
}
</style>
