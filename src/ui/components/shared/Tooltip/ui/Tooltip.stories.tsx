import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

import { Text } from 'ui/components/shared/Text'

const meta: Meta<typeof Tooltip> = {
    title: 'components/shared/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'fullscreen'
    },

    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Normal: Story = {
    args: {
        children: <div style={{ background: 'black', padding: '0.5rem' }}>Hover on me</div>,
        content: <Text color={'secondary'}>Tooltip content</Text>
    }
}
