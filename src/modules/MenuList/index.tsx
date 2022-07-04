import React, { memo } from 'react'
import { ScrollView } from 'react-native'

import Box from '../../components/core/Box'
import MenuButton from '../../components/MenuButton'

import useHooks from './hooks'

const MenuList = () => {
  const { memoMenu } = useHooks()

  return (
    <Box>
      <ScrollView horizontal>
        {memoMenu.map((menu) => (
          <Box key={menu.label}>
            <MenuButton label={menu.label} img={menu.img} />
          </Box>
        ))}
      </ScrollView>
    </Box>
  )
}

export default memo(MenuList)
