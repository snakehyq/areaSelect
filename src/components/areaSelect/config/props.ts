import { PropType } from 'vue'
interface ISelectField {
  name: string,
  code: string,
  children: string
}
export const basicProps = {
  data: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  defaultTitle: {
    type: String,
    default: 'Default'
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
