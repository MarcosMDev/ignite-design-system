import type { Meta, StoryObj } from '@storybook/react'
import { ToastComponent, ToasComponentProps, Button } from '@marcosm-ui/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToasComponentProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  })

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <ToastComponent open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToasComponentProps>

export const Primary: StoryObj<ToasComponentProps> = {}
