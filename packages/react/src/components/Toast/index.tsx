import * as Toast from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { ComponentProps } from 'react';
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ToastViewport } from './styles';

export interface ToasComponentProps extends ComponentProps<typeof ToastContainer> {
    title: string
    description: string
}  

export function ToastComponent({ title, description, ...props }: ToasComponentProps) {
    return (
        <Toast.Provider> 
            <ToastContainer {...props} >
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>
                    {description}
                </ToastDescription>
                <ToastClose>
                    <X  weight='light' size={20}/>
                </ToastClose>
            </ToastContainer>
            <ToastViewport />
        </Toast.Provider>
    )
}

ToastComponent.displayName = "Toast";