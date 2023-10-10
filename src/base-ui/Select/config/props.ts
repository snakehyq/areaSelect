import { PropType } from 'vue'
interface ISelectField {
  name: string,
  code: string,
  children: string
}
interface IData {
  [propName: string] : any
}
export const basicProps = {
  data: {
    type: Object as PropType<IData>,
    default: () => ({})
  },
  clearable: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  defaultTitle: {
    type: String as PropType<string>,
    default: 'Default'
  },
  id: {
    type: String as PropType<string>,
    require: true,
    default: 'id'
  },
  selectField: {
    type: Object as PropType<ISelectField>,
    default: () => ({
      name: 'name',
      code: 'code',
      children: 'children'
    })
  }
}
