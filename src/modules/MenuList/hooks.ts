import { useMemo } from 'react'

import { menuList } from './data'

const useHooks = () => {
  const memoMenu = useMemo(() => menuList, [])
  return {
    memoMenu,
  }
}

export default useHooks
