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

![Snipaste_2023-10-08_18-23-49](https://github.com/snakehyq/areaSelect/blob/master/public/static/img/\Snipaste_2023-10-08_18-23-49.png)

#### 属性

| 属性名        | 类型   | 默认值                                            | 说明                   |
| ------------- | ------ | ------------------------------------------------- | ---------------------- |
| data          | Array  |                                                   | 省市区数据             |
| default-title | String | Default                                           | 未选择文本             |
| select-field  | Object | { code: 'code',name: 'name',children:'children' } | 渲染嵌套数据的配置选项 |

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
