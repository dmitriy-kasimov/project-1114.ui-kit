import React, { FC } from 'react'
import { classNames } from 'lib/classNames/classNames'
import { memo } from 'react'
import cls from './Navbar.module.scss'
import { NavbarProps } from '../../types/NavbarProps'

export const Navbar: FC<NavbarProps> = memo(props => {
    const { className, children } = props

    return <div className={classNames(cls.Navbar, {}, [className])}>{children}</div>
})
