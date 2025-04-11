import React, { FC } from 'react'
import { Mods, classNames } from 'lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../../Portal/Portal'
import { Overlay } from '../../Overlay/Overlay'
import { useModal } from 'lib/hooks/useModal/useModal'
import { ANIMATION_DELAY } from 'styles/effects/anims'
import { ModalProps, mapContentPadding } from '../types/ModalProps'

export const Modal: FC<ModalProps> = props => {
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
        animationDelay: ANIMATION_DELAY,
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
