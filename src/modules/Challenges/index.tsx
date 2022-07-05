import React, { memo } from 'react'
import { Pressable, ScrollView } from 'react-native'

import ChallengeCard from '../../components/ChallengeCard'
import Box from '../../components/core/Box'
import HeaderContent from '../../components/HeaderContent'
import theme from '../../styles/theme'

import useHooks from './hooks'

const Challenges = () => {
  const { memoChallenge } = useHooks()

  return (
    <Box my={10}>
      <Box mb={20}>
        <HeaderContent label="Get rewarded with Challenges" withIcon />
      </Box>
      <ScrollView horizontal>
        {memoChallenge.map((m) => (
          <Pressable
            key={m.id}
            android_ripple={{ color: theme.element.boxShadow }}
          >
            <ChallengeCard img={m.img} subTitle={m.subTitle} title={m.title} />
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  )
}

export default memo(Challenges)
