import { ReactElement } from 'react'
import { IModalProps } from '../../Modal/types/IModalProps'

export interface IWindowProps extends IModalProps {
    sidebar?: ReactElement
    navbar?: ReactElement
}
