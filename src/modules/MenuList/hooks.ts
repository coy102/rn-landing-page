import { useMemo } from 'react'

import menuList from '../../config/menu'

const useHooks = () => {
  const memoMenu = useMemo(() => menuList, [])
  return {
    memoMenu,
  }
}

export default useHooks
