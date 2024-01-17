import { type PropsWithChildren, type ReactElement, useEffect, useRef } from 'react'
import Reveal from 'reveal.js'

export function RevealSlides ({ children }: PropsWithChildren): ReactElement {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current === null) return

        const r = new Reveal(ref.current, {
            embedded: true
        })
        void r.initialize()
        return () => { r.destroy() }
    }, [ref])

    return <div className={'w-full h-80'}>
        <div ref={ref} className={'reveal'}>
            <div className={'slides'}>
                {children}
            </div>
        </div>
    </div>
}
