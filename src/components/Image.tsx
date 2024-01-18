import React, { type ReactElement } from 'react'

interface Props {
    maxWidth?: number | string
    title?: string
    description?: string | ReactElement
    src: string
}

export function Image ({ maxWidth, title, description, src }: Props): ReactElement {
    if (typeof maxWidth === 'number') {
        maxWidth = `${maxWidth}px`
    }

    return (
        <div className={'card mb-1'}>
            <div className={'card__image'}>
                <img src={src} className='mx-auto' style={{ maxWidth }} />
            </div>
            <div className={'card__body'}>
                {title !== undefined ? <h4>{title}</h4> : undefined}
                {description !== undefined ? <small>{description}</small> : undefined}
            </div>
        </div>
    )
}
