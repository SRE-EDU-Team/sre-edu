import BrowserOnly from '@docusaurus/BrowserOnly'
import { type PropsWithChildren, type ReactElement, useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes'

function RevealSlidesInner ({ children }: PropsWithChildren): ReactElement {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current === null) return

        const r = new Reveal(ref.current, {
            embedded: true,
            plugins: [RevealNotes]
        })
        void r.initialize()
        return () => { r.destroy() }
    }, [ref])

    return <div className={'w-full h-80 not-prose'}>
        <div ref={ref} className={'reveal'}>
            <div className={'slides'}>
                {children}
            </div>
        </div>
    </div>
}

export function RevealSlides ({ children }: PropsWithChildren): ReactElement {
    return <BrowserOnly>
        {() => <RevealSlidesInner>{ children }</RevealSlidesInner>}
    </BrowserOnly>
}
