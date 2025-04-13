import { ReactElement } from 'react'
import { IModalProps } from 'ui/utils/Modal/types/IModalProps'

export interface IWindowProps extends IModalProps {
    sidebar?: ReactElement
}
