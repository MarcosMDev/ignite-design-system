import * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from "../../styles"

const hide = keyframes({
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
})

const slideIn = keyframes({
    from: {
        transform: 'translateX(calc(100% + 25px))'
    },
    to: {
        transform: 'translateX(0)'
    }
})

const swipeOut = keyframes({
    from: {
        transform: 'translateX(var(--radix-toast-swipe-end-x))'
    },
    to: {
        transform: 'translateX(calc(100% + 25px));'
    }
})

export const ToastViewport = styled(Toast.Viewport, {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    padding: 25,
    gap: 10,
    width: 360,
    maxWidth: "100vw",
    height: 82,
    listStyle: "none",
    zIndex: 10000,
    outline: "none",
})

export const ToastContainer = styled(Toast.Root, {
    position: 'relative',

    backgroundColor: '$gray800',
    border: '1px solid $gray600',

    width: '$80',
    padding: "$3 $4",

    borderRadius: '$sm',

    '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
    },

    '&[data-swipe="move"]': {
        transform: "translateX(0)",
    },

    '&[data-swipe="cancel"]': {
        transform: "translateX(0)",
        transition: "transform 200ms ease-out",
    },
    
    '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
    },
})

export const ToastClose = styled(Toast.Close, {
    all: 'unset',
    position: 'absolute',
    right: '$4',
    top: '$4',

    color: '$gray200',

    cursor: 'pointer',
})

export const ToastTitle = styled(Toast.Title, {
    fontFamily: '$default',
    fontSize: '$xl',
    fontWeight: '$bold',
    color: '$white',
    lineHeight: '$base'
})

export const ToastDescription = styled(Toast.Description, {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray200',
    lineHeight: "$base",
})