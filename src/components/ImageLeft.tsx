import React, { type CSSProperties, type PropsWithChildren, type ReactElement } from 'react'

interface Props {
    img: string
    imgStyle: CSSProperties
}

export function ImageLeft ({ img, children }: PropsWithChildren<Props>): ReactElement {
    return (
        <div className={'flex'}>
            <div className='min-w-52 mr-2'><img src={img} /></div>
            <div className='grow'>{children}</div>
        </div>
    )
}
