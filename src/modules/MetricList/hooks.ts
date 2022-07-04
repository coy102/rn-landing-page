import { useMemo } from 'react'

import { metrics } from './data'

const useHooks = () => {
  const memoMetrics = useMemo(() => metrics, [])
  return {
    memoMetrics,
  }
}

export default useHooks
