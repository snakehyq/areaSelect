<template>
  <Select
   v-if="isSelecedProvinceShow"
    :data="provinces"
    :default-title="defaultTitle"
    :select-field="selectField"
    @handleSelected="handleProvincesSelected"
  ></Select>
  <Select
   v-if="isSelecedCictiesShow"
    :data="state.cicties"
    :default-title="defaultTitle"
    :select-field="selectField"
    @handleSelected="handleCictiesSelected"
  ></Select>
  <Select
   v-if="isSelecedCountiesShow"
    :data="state.counties"
    :default-title="defaultTitle"
    :select-field="selectField"
    @handleSelected="handleCountiesSelected"
  ></Select>
</template>

<script lang="ts" setup>
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { reactive, computed, toRaw } from 'vue'
import { Select } from '@/base-ui/Select'
import { basicProps } from '../config/props'
const { data, selectField, defaultTitle } = defineProps(basicProps)
// 策略性数据
const provinces = formatData(data)

// 响应式数据
const state = reactive({
  cicties:null,
  counties: null,
  selectedInfo: {
    province: null,
    city: null,
    country: null
  }
})

const isSelecedProvinceShow = computed(() => !!provinces)
const isSelecedCictiesShow = computed(() => !!state.cicties)
const isSelecedCountiesShow = computed(() => !!state.counties)
const emits = defineEmits(['handleSelected'])

function formatData(data: any[]) {
 return data.reduce((pre,next) => {
    if(next[selectField.children] && next[selectField.children].length) {
      next[selectField.children] = formatData(next[selectField.children])
    }
    pre[next[selectField.name]] = next
    return pre
  }, {})
}
const handleProvincesSelected = (value: string) => {
  if(!value) {
    state.cicties = null,
    state.counties = null,
    state.selectedInfo.province = null
    state.selectedInfo.city = null
    state.selectedInfo.country = null
    emits('handleSelected', toRaw(state.selectedInfo))
    return
  }
  const [code, name] = value.split(':')
  state.cicties = provinces[name][selectField.children]
  state.selectedInfo.province = {
    code,
    name
  } as any
  emits('handleSelected', toRaw(state.selectedInfo))
}
const handleCictiesSelected = (value: string) => {
  if(!value) {
    state.counties = null,
    state.selectedInfo.city = null
    state.selectedInfo.country = null
    emits('handleSelected', toRaw(state.selectedInfo))
    return
  }
  const [code, name] = value.split(':')
  console.log((state.cicties as any )[name]);

  state.counties = (state.cicties as any )[name][selectField.children]
  state.selectedInfo.country = {
    code,
    name
  } as any
  emits('handleSelected', toRaw(state.selectedInfo))
}
const handleCountiesSelected = (value: string) => {
  if(!value) {
    state.selectedInfo.country = null
    emits('handleSelected', toRaw(state.selectedInfo))
    return
  }
  const [code, name] = value.split(':')
  state.selectedInfo.city = {
    code,
    name
  } as any
  emits('handleSelected', toRaw(state.selectedInfo))
}

</script>

<style lang="less" scoped>

</style>
