import * as Tooltip from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',

  backgroundColor: '$gray900',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray100',
})
