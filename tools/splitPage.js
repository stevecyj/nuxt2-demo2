import * as R from 'ramda'
const { clone, splitEvery } = R

/**
 * 将列表拆分成指定长度的子列表集
 * @param num 指定长度
 * @param list
 * @param fill 补不足位数占位符（用于flex布局渲染空位）
 * @return {list}
 */
export const splitPage = (num, list, fill) => {
  let arr = clone(list)

  if (arr.length && fill !== undefined) {
    const m = arr.length % num
    const n = m ? num - m : 0
    for (let i = 0; i < n; i++) {
      arr.push(fill)
    }
    arr = splitEvery(num, arr)
  }
  return arr
}

export const splitIntoGroups = (items) => {
  if (!items || items.length === 0) return []

  const group1 = [items[0]]
  const group2 = items.slice(1, 3)
  const group3 = items.slice(3)

  return [group1, group2, group3]
}
