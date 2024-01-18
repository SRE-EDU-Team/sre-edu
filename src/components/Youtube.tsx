import React, { type ReactElement } from 'react'

interface Props {
    id: string
}

const STYLE = {
    aspectRatio: '560 / 315'
}

export function Youtube ({ id }: Props): ReactElement {
    return (
        <iframe
            style={STYLE}
            width={'560'}
            className={'max-w-full m-auto'}
            src={`https://www.youtube.com/embed/${id}`}
            allow={
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            }
        ></iframe>
    )
}
