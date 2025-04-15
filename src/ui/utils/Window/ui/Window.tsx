import React, { FC } from 'react'
import { memo } from 'react'

import { IWindowProps } from '../types/WindowProps'
import { Modal } from 'ui/utils/Modal'
import { Mods, classNames } from 'lib/classNames/classNames'
import cls from './Window.module.scss'
import { VStack } from 'ui/components/shared/Stack'

export const Window: FC<IWindowProps> = memo(props => {
    const {
        className,
        isOpen = true,
        closable = true,
        fullscreen = false,

        sidebar,
        navbar,
        children
    } = props

    const mods: Mods = {
        [cls.fullscreen]: fullscreen
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={close}
            closable={closable}
            fullscreen={fullscreen}
            padding={'0'}
            className={classNames('', mods, [])}
        >
            <div className={classNames(cls.content, {}, [className])}>
                {sidebar}
                <VStack max>
                    {navbar}
                    <div className={cls.ChildrenWrapper}>{children}</div>
                </VStack>
            </div>
        </Modal>
    )
})
