import { PropType } from 'vue'
interface ISelectField {
  name: string,
  code: string,
  children: string
}
export const basicProps = {
  modelValue: {
    type: Array as PropType<number[]>,
    default: () => []
  },
  data: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  defaultTitle: {
    type: String,
    default: 'Default'
  },
  clearable: {
    type: Boolean as PropType<boolean>,
    default: false
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
