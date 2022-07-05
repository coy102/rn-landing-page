import { useMemo } from 'react'

import { challengeData } from './data'

const useHooks = () => {
  const memoChallenge = useMemo(() => challengeData, [])
  return {
    memoChallenge,
  }
}

export default useHooks
