import React from 'react'
import { ScrollView } from 'react-native'

import { snakeCase } from 'lodash'

import Box from '../../components/core/Box'
import MetricItem from '../../components/MetricItem'

import useHooks from './hooks'

const MetricList = () => {
  const { memoMetrics } = useHooks()

  return (
    <Box my={20}>
      <ScrollView horizontal>
        {memoMetrics.map((metric) => (
          <Box mx={4} key={snakeCase(metric.title)}>
            <MetricItem
              img={metric.img}
              title={metric.title}
              value={metric.value}
            />
          </Box>
        ))}
      </ScrollView>
    </Box>
  )
}

export default MetricList
