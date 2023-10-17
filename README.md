# vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 省市区选择器

#### 省选择器

![Snipaste_2023-10-08_18-23-22](https://github.com/snakehyq/areaSelect/blob/master/public/static/img/Snipaste_2023-10-08_18-23-22.png)

#### 市选择器

![Snipaste_2023-10-08_18-23-34](https://github.com/snakehyq/areaSelect/blob/master/public/static/img/Snipaste_2023-10-08_18-23-34.png)

#### 区县选择器

![Snipaste_2023-10-08_18-23-49](https://github.com/snakehyq/areaSelect/blob/master/public/static/img/Snipaste_2023-10-08_18-23-49.png)

#### 属性

| 属性名        | 类型          | 默认值                                            | 说明                   |
| ------------- | ------------- | ------------------------------------------------- | ---------------------- |
| data          | Array         |                                                   | 省市区数据             |
| default-title | String        | Default                                           | 未选择文本             |
| select-field  | Object        | { code: 'code',name: 'name',children:'children' } | 渲染嵌套数据的配置选项 |
| clearable     | Boolean       | false                                             | 是否支持清空选项       |
| v-model       | Array[number] |                                                   | 双向数据绑定           |

#### select-field 参数说明

| 参数     | 类型   | 默认值   | 说明                                        |
| -------- | ------ | -------- | ------------------------------------------- |
| code     | String | code     | 编码/数据的唯一标识                         |
| name     | String | name     | 文本                                        |
| children | String | children | 指定选项的子选项为选项对象的某个属性值/子级 |

#### 事件

| 事件名          | 说明           | 返回值            |
| --------------- | -------------- | ----------------- |
| @handleSelected | 选中数据的事件 | （value: Object） |

`@handleSelected`,当选中数据时有效，返回值说明如下：

| 返回值 | 类型   | 说明                 |
| ------ | ------ | -------------------- |
| value  | Object | 选中的省/市/区县数据 |

#### 基础用法

在 `template` 中使用组件

```js
<template>
  <div class="city">
    <area-select v-model="areaSelectModel" :data="options" :clearable="clearable" :default-title="defaultTitle" :select-field="fields" @handleSelected="handleSelected"/>
  </div>
</template>
```

```js

<script lang="ts" setup>
import { areaSelect } from '@/components/areaSelect'
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
```

```js
<style lang="less" scoped>
.city {
  margin-top: 150px;
}
</style>
```

#### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

```js
[{
  code: '11',
  name: '北京市',
  disabled: true,
  children: [{
    code: '1101',
    name: '市辖区',
    disabled: true,
    children: [{
      code: '110101',
      name: '东城区',
      disabled: true
    }, {
      code: '110116',
      name: '怀柔区'
    }, {
      code: '110117',
      name: '平谷区'
    }]
  }]
}]
```

