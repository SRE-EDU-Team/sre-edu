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
        <h1 className='text-6xl text-amber-600 mb-4'>{title}</h1>
        {
            subtitle !== undefined ? <div className='text-3xl'>{subtitle}</div> : null
        }
        {children}
    </section>
}

const MAX_HEIGHT = {
    height: 700
}

const MAX_WIDTH = {
    width: 960
}

export function TwoPanelsSlide ({ children }: PropsWithChildren): ReactElement {
    if (children === undefined || children === null) {
        throw Error('Children required here')
    }

    if (!Array.isArray(children)) {
        throw Error('Children mush be array')
    }

    if (children.length !== 2) {
        throw Error('Exactly 2 children expected')
    }

    return <section>
        <div className='flex items-stretch' style={MAX_WIDTH}>
            <div className='grow basis-0 bg-amber-50 flex flex-col justify-center p-8' style={MAX_HEIGHT}>
                {children[0]}
            </div>
            <div className='grow basis-0 flex flex-col justify-center p-8' style={MAX_HEIGHT}>
                {children[1]}
            </div>
        </div>
    </section>
}

export function TitleLeftSlide ({ title, subtitle, children }: PropsWithChildren<TitleSlideProps>): ReactElement {
    return <TwoPanelsSlide>
        <>
            <h1 className='text-5xl text-amber-600 mb-4 text-left'>{title}</h1>
            {
                subtitle !== undefined ? <div className='text-3xl text-left'>{subtitle}</div> : null
            }
        </>
        <>
            {children}
        </>
    </TwoPanelsSlide>
}

interface BulletsSlideProps {
    title: string
    subtitle?: string
    left?: boolean
}

export function BulletsSlide ({ title, subtitle, left, children }: PropsWithChildren<BulletsSlideProps>): ReactElement {
    const body = <ul className='text-3xl text-left mx-auto w-fit list-disc'>
        {children}
    </ul>

    return left === true
        ? <TitleLeftSlide title={title} subtitle={subtitle}>{body}</TitleLeftSlide>
        : <TitleSlide title={title} subtitle={subtitle}>
            {body}
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
