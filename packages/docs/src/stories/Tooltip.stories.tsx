import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  TooltipComponent,
  TooltipComponentProps,
} from '@marcosm-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: TooltipComponent,
  args: {
    children: (
      <Box
        css={{
          width: '$1',
          height: '$1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Text>21</Text>
      </Box>
    ),
    information: '21 de Outubro - Indisponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipComponentProps>

export const Primary: StoryObj<TooltipComponentProps> = {}
