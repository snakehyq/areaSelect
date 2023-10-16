import { IData } from '../config/props'
export const useEchoData = (id: number | undefined, data: IData) => {
  function useFn (element: HTMLSelectElement) {
    console.log(id, data)
    let echoIndex = -1
    if (typeof id !== 'number') return echoIndex
    // 不存在已选择的数据
    if (!data[id]) return echoIndex
    const childElements = element.children
    for (let index = 1; index < childElements.length; index++) {
      const _ = childElements[index] as HTMLOptionElement
      const [code] = _.value.split(':')
      if (Number(code) === id) {
        echoIndex = index
        element.options.selectedIndex = index
        break
      }
    }
    return echoIndex
  }
  return {
    useFn
  }
}
