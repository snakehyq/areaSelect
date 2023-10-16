<template>
  <Select
    v-if="isSelecedProvinceShow"
    :data="provinces"
    :default-title="defaultTitle"
    :select-field="selectField"
    id="provinceId"
    :echo-id="provinceId"
    :clearable="clearable"
    @handleSelected="handleProvincesSelected"
  ></Select>
  <Select
    v-if="isSelecedCictiesShow"
    :data="state.cicties"
    :default-title="defaultTitle"
    :select-field="selectField"
    :clearable="clearable"
    :echo-id="cictyId"
    id="cityId"
    @handleSelected="handleCictiesSelected"
  ></Select>
  <Select
    v-if="isSelecedCountiesShow"
    :data="state.counties"
    :default-title="defaultTitle"
    :select-field="selectField"
    :clearable="clearable"
    :echo-id="countyId"
    id="countryId"
    @handleSelected="handleCountiesSelected"
  ></Select>
</template>

<script lang="ts" setup>
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { reactive, computed, toRaw } from "vue";
import { Select } from "@/base-ui/Select";
import { basicProps } from "../config/props";
const props = defineProps(basicProps);
const { data, selectField, defaultTitle, clearable } = props;
// 策略性数据
const provinces = formatData(data);
const modelValueMap: number[] = [];
const [provinceId = undefined, cictyId = undefined, countyId = undefined] =
  props.modelValue;
// 响应式数据
const state = reactive({
  cicties: null,
  counties: null,
  selectedInfo: {
    province: null,
    city: null,
    country: null,
  },
});

const isSelecedProvinceShow = computed(() => !!provinces);
const isSelecedCictiesShow = computed(() => !!state.cicties);
const isSelecedCountiesShow = computed(() => !!state.counties);
const emits = defineEmits(["handleSelected", "update:modelValue"]);

function formatData(data: any[]) {
  return data.reduce((pre, next) => {
    if (next[selectField.children] && next[selectField.children].length) {
      next[selectField.children] = formatData(next[selectField.children]);
    }
    pre[next[selectField.code]] = next;
    return pre;
  }, {});
}
// 处理回显数据
echoSelect();
function echoSelect() {
  if (!provinceId) return;
  echoProvinceSelect();
  if (!cictyId) return;
  echoCictySelect();
  if (!countyId) return;
  echoCountrySelect();
  function echoProvinceSelect() {
    // 设置数据回显的时候已选择的数据赋值给selectedInfo
    console.log("provinces[provinceId as number]",provinces[provinceId as number]);
    const {code, name} = provinces[provinceId as number];
    state.selectedInfo.province = {
      code,
      name,
    } as any;
  }
  function echoCictySelect() {
    state.cicties = provinces[provinceId as number][selectField.children];
    // 设置数据回显的时候已选择的数据赋值给selectedInfo
    const {code, name} = (state.cicties as any)[cictyId as number];
    state.selectedInfo.city = {
      code,
      name,
    } as any;
  }
  function echoCountrySelect() {

    state.counties = (state.cicties as any)[cictyId as number][
      selectField.children
    ]
    const {code, name} = (state.counties as any)[countyId as number];
    state.selectedInfo.country = {
    code,
    name,
  } as any;
  }
  console.log(state.selectedInfo);

}
const handleProvincesSelected = (value: string) => {
  if (!value) {
    (state.cicties = null),
      (state.counties = null),
      (state.selectedInfo.province = null);
    state.selectedInfo.city = null;
    state.selectedInfo.country = null;
    emits("handleSelected", toRaw(state.selectedInfo));
    emits("update:modelValue", []);
    return;
  }
  const [code, name] = value.split(":");
  state.cicties = provinces[code][selectField.children];
  state.selectedInfo.province = {
    code,
    name,
  } as any;
  modelValueMap[0] = Number(code);
  emits("handleSelected", toRaw(state.selectedInfo));
  emits("update:modelValue", modelValueMap);
};
const handleCictiesSelected = (value: string) => {
  if (!value) {
    (state.counties = null), (state.selectedInfo.city = null);
    state.selectedInfo.country = null;
    emits("handleSelected", toRaw(state.selectedInfo));
    emits("update:modelValue", [modelValueMap[0]]);
    return;
  }
  const [code, name] = value.split(":");
  console.log((state.cicties as any)[code]);

  state.counties = (state.cicties as any)[code][selectField.children];
  state.selectedInfo.city = {
    code,
    name,
  } as any;
  modelValueMap[1] = Number(code);
  emits("handleSelected", toRaw(state.selectedInfo));
  emits("update:modelValue", modelValueMap);
};
const handleCountiesSelected = (value: string) => {
  if (!value) {
    state.selectedInfo.country = null;
    emits("handleSelected", toRaw(state.selectedInfo));
    emits("update:modelValue", [modelValueMap[0], modelValueMap[1]]);
    return;
  }
  const [code, name] = value.split(":");
  state.selectedInfo.country = {
    code,
    name,
  } as any;
  modelValueMap[2] = Number(code);
  emits("handleSelected", toRaw(state.selectedInfo));
  emits("update:modelValue", modelValueMap);
};
</script>

<style lang="less" scoped>
</style>
