import { PropType } from 'vue'
interface ISelectField {
  name: string,
  code: string,
  children: string
}
export interface IData {
  [propName: string] : any
}
export const basicProps = {
  echoId: {
    type: Number as PropType<number | undefined>,
    require: true
  },
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
