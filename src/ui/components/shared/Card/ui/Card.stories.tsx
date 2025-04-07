import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Skeleton } from 'ui/components/shared/Skeleton'

const meta: Meta<typeof Card> = {
    title: 'widgets/Card',
    component: Card,
    decorators: [Story => decoratorBackground(Story)],
    parameters: {
        layout: 'fullscreen'
    },

    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Card>

const children = <Skeleton width={300} height={300} />

export const VariantFilled: Story = {
    args: {
        variant: 'filled',
        children
    }
}

export const VariantOutlined: Story = {
    args: {
        variant: 'outlined',
        children
    }
}

export const WithoutPadding: Story = {
    args: {
        padding: '0',
        children
    }
}

export const PaddingXL: Story = {
    args: {
        padding: 'xl',
        children
    }
}
