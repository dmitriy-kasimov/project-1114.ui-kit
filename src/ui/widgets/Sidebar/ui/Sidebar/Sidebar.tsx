import React, { FC } from 'react'
import { classNames } from 'lib/classNames/classNames'
import { memo } from 'react'
import cls from './Sidebar.module.scss'
import { SidebarProps } from '../../types/SidebarProps'
import { VStack } from 'ui/components/shared/Stack'

export const Sidebar: FC<SidebarProps> = memo(props => {
    const { className, items } = props

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <VStack role='navigation' gap='m' max>
                {items}
            </VStack>
        </div>
    )
})
