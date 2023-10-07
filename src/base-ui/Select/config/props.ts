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
