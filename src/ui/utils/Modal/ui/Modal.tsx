import React, { FC } from 'react'
import { Mods, classNames } from 'lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../../Portal/Portal'
import { Overlay } from '../../Overlay/Overlay'
import { useModal } from 'lib/hooks/useModal/useModal'
import { IModalProps, mapContentPadding } from '../types/IModalProps'

export const Modal: FC<IModalProps> = props => {
    const {
        className,
        children,
        isOpen = true,
        onClose,
        lazy,
        portalElement,
        closable = true,
        fullscreen = false,
        padding = 's'
    } = props

    const { isClosing, isMounted, close } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
        closable
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const addons = [cls[mapContentPadding[padding]]]

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal element={portalElement}>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={classNames(cls.content, { [cls.fullscreen]: fullscreen }, addons)}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
