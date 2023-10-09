<template>
  <select class="select-option" @change="handleSelected">
    <option value="" class="option option-default">{{ defaultTitle }}</option>
    <option
      v-for="(value, key, index) in data"
      :class="['option', { disabled: value.disabled }]"
      :disabled="value.disabled"
      :key="index"
      :value="`${value[selectField.code]}:${value[selectField.name]}`"
    >
      {{ key }}
    </option>
  </select>
</template>

<script lang="ts" setup>
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { basicProps } from "../config/props";
const props = defineProps(basicProps);
const emits = defineEmits(["handleSelected"]);
const handleSelected = (e: Event) => {
  const val = (e.target as HTMLInputElement).value;
  emits("handleSelected", val);
};
</script>

<style lang="less" scoped>
.select-option {
  color: #a09090;
  border: 1px solid #a89e9e;
  padding: 5px 15px;
  .option {
    color: #606266;
    padding: 8px 5px;
  }
  .option:hover {
    background-color: red;
  }
  .disabled {
    color: #c4c9db;
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
}
</style>
