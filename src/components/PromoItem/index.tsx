import React, { memo } from 'react'

import Card, { CardProps } from '../core/Card'
import HeaderContent, { HeaderContentProps } from '../HeaderContent'

interface Props extends CardProps, HeaderContentProps {}

const PromoItem = ({
  img,
  label,
  subtitle,
  title,
  titleBold,
  titleSize,
  withIcon,
}: Props) => (
  <>
    <HeaderContent label={label} withIcon={withIcon} />
    <Card
      img={img}
      subtitle={subtitle}
      title={title}
      titleSize={titleSize}
      titleBold={titleBold}
    />
  </>
)

export default memo(PromoItem)
