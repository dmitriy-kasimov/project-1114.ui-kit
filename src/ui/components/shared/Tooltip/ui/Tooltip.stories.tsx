import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

import { Text } from 'ui/components/shared/Text'
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

const meta: Meta<typeof Tooltip> = {
    title: 'components/shared/Tooltip',
    decorators: [Story => decoratorBackground(Story)],
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
        children: (
            <div
                style={{
                    background: 'black',
                    padding: '0.5rem',
                    borderRadius: 'var(--uikit-border-radius-xs)'
                }}
            >
                <Text>Hover on me</Text>
            </div>
        ),
        content: <Text whiteSpace={'nowrap'}>Tooltip content Tooltip content</Text>
    }
}
