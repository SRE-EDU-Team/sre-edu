import BrowserOnly from '@docusaurus/BrowserOnly'
import { type PropsWithChildren, type ReactElement, useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes'

interface TitleSlideProps {
    title: string
    subtitle?: string
}

export function TitleSlide ({ title, subtitle, children }: PropsWithChildren<TitleSlideProps>): ReactElement {
    return <section>
        <h1 className='text-6xl text-amber-600'>{title}</h1>
        {
            subtitle !== undefined ? <div className='text-3xl'>{subtitle}</div> : null
        }
        {children}
    </section>
}

interface BulletsSlideProps {
    title: string
}

export function BulletsSlide ({ title, children }: PropsWithChildren<BulletsSlideProps>): ReactElement {
    return <TitleSlide title={title}>
        <h1 className='text-6xl text-amber-600'>{title}</h1>
        <ul className='text-3xl text-left mx-auto w-fit list-disc'>
            {children}
        </ul>
    </TitleSlide>
}

interface ImageSlideProps {
    title?: string
    src: string
}

export function ImageSlide ({ title, src }: ImageSlideProps): ReactElement {
    return <section>
        { title !== undefined ? <h1 className='text-6xl text-amber-600'>{title}</h1> : null }
        <img className='mx-auto' src={src} />
    </section>
}

export interface RevealSlidesProps {
    embedded?: boolean
}

function RevealSlidesInner ({ embedded, children }: PropsWithChildren<RevealSlidesProps>): ReactElement {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current === null) return

        const r = new Reveal(ref.current, {
            embedded,
            hash: true,
            plugins: embedded === true ? [] : [RevealNotes]
        })
        void r.initialize()
        return () => { r.destroy() }
    }, [ref])

    return <div className={embedded === true ? 'w-full h-80 not-prose my-4' : 'w-screen h-screen not-prose'}>
        <div ref={ref} className={'reveal'}>
            <div className={'slides'}>
                {children}
            </div>
        </div>
    </div>
}

export function RevealSlides ({ embedded, children }: PropsWithChildren<RevealSlidesProps>): ReactElement {
    return <BrowserOnly>
        {() => <RevealSlidesInner embedded={embedded}>{ children }</RevealSlidesInner>}
    </BrowserOnly>
}
