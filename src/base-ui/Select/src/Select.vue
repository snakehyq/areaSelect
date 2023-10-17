<template>
  <div class="select">
    <select :id="id" class="select-option" @change="handleSelected">
      <option value="" class="option option-default">{{ defaultTitle }}</option>
      <option
        v-for="(value, key, index) in data"
        :class="['option', { disabled: value.disabled }]"
        :disabled="value.disabled"
        :key="index"
        :value="`${value[selectField.code]}:${value[selectField.name]}`"
      >
        {{ value[selectField.name] }}
      </option>
    </select>
    <div v-show="isClearable" class="clear" @click="handleClear">x</div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { computed, ref, onMounted } from "vue";
import { basicProps } from "../config/props";
import { useEchoData } from '../hooks'
const props = defineProps(basicProps);
const emits = defineEmits(["handleSelected"]);
let selectedVal = ref("");
let selectHtml:HTMLSelectElement
// 回显数据
const { useFn }  = useEchoData(props.echoId, props.data)

onMounted(() => {
  selectHtml = document.getElementById(props.id) as HTMLSelectElement;
  useFn(selectHtml)
})
// 是否支持清空选项
const isClearable = computed(() => {
  return selectedVal.value && props.clearable;
});
const handleSelected = (e: Event) => {
  const val = (e.target as HTMLSelectElement).value;
  selectedVal.value = val;
  emits("handleSelected", val);
};
const handleClear = () => {
  resetSelected()
  selectedVal.value = ''
  emits("handleSelected", "");
}
 //回到初始状态
const resetSelected = () => {
  selectHtml.options.selectedIndex = 0;
}
defineExpose({
  resetSelected
})
</script>

<style lang="less" scoped>
.select {
  position: relative;
  width: 220px;
}
// 清除IE的默认选择框样式，隐藏下拉箭头
select::-ms-expand {
  display: none;
}
.select-option {
  color: #a09090;
  border: 1px solid #c2c6ce;
  padding: 5px 15px;
  width: 220px;
  border-radius: 4px;
  // 去掉箭头
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  // 去掉高亮
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  .option {
    color: #606266;
    padding: 8px 5px;
  }
  &::selection {
    color: red;
  }
  .disabled {
    color: #c4c9db;
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
}
.clear {
  position: absolute;
  bottom: 50%;
  right: 5px;
  font-size: 1px;
  color: #a29b9f;
  border: 1px solid #a29b9f;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  text-align: center;
  line-height: 9px;
  transform: translateY(50%);
  cursor: pointer;
}
</style>
