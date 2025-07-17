import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '../index'
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Skeleton } from 'ui/components/shared/Skeleton'

const meta: Meta<typeof TextField> = {
    title: 'components/controls/TextField',
    component: TextField,
    decorators: [Story => decoratorBackground(Story)],
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
    args: {
        placeholder: 'Placeholder'
    }
}

export const WithValidationMessage: Story = {
    args: {
        placeholder: 'Placeholder',
        validationMessage: '*wrong data'
    }
}

export const WithLeftAddon: Story = {
    args: {
        placeholder: 'Suus',
        addonLeft: <Skeleton width={32} height={32} border={'50%'} />
    }
}

export const WithRightAddon: Story = {
    args: {
        placeholder: 'Placeholder',
        addonRight: <Skeleton width={32} height={32} border={'50%'} />
    }
}

export const WithBothAddons: Story = {
    args: {
        placeholder: 'Placeholder',
        addonLeft: <Skeleton width={32} height={32} border={'50%'} />,
        addonRight: <Skeleton width={32} height={32} border={'50%'} />
    }
}

export const Disabled: Story = {
    args: {
        disabled: true
    }
}
