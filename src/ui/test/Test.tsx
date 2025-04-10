import React, { useEffect } from 'react'
import { FC, useState } from 'react'
import { Button } from 'ui/components/controls/buttons/Button'
import { Skeleton } from 'ui/components/shared/Skeleton'

export const Test: FC = () => {
    const [window, setWindow] = useState(true)
    const [modal, setModal] = useState(false)
    useEffect(() => {
        setTimeout(() => setModal(true), 3000)
    })
    return (
        <Button
            paddingH={'m'}
            gap={'m'}
            addonLeft={<Skeleton width={30} height={30} border={'50%'} />}
        >
            123
        </Button>
    )
}
