import { faArrowDown, faArrowUp, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { type PropsWithChildren, type ReactElement, useRef, useState } from 'react'

import styles from './Expand.module.scss'

interface Props {
    title: string
}

const collapsedSize = '50px'

export function Expand ({ title, children }: PropsWithChildren<Props>): ReactElement {
    const [expand, setExpand] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const toggleExpand = (): void => {
        if (ref.current === null) {
            return
        }

        if (ref.current.style.height === 'auto') {
            ref.current.style.height = `${ref.current.scrollHeight}px`
            getComputedStyle(ref.current, null).getPropertyValue('height')
            ref.current.style.height = collapsedSize
            setExpand(false)
        } else {
            ref.current.style.height = `${ref.current.scrollHeight}px`
            setExpand(true)
        }
    }

    return (
        <div className={clsx(styles.c, 'alert', 'alert--secondary')}>
            <div onClick={toggleExpand}>
                <div>{title}</div>
                <FontAwesomeIcon icon={expand ? faChevronDown : faChevronRight} />
            </div>
            <div
                ref={ref}
                style={{ height: collapsedSize }}
                onTransitionEnd={() => {
                    if (ref.current === null) {
                        return
                    }
                    if (ref.current.style.height !== collapsedSize) {
                        ref.current.style.height = 'auto'
                    }
                }}
            >
                {children}
            </div>
            <div className={'toggle'} onClick={toggleExpand}>
                {expand
                    ? (
                        <>
                            <FontAwesomeIcon icon={faArrowUp} />
                            <a>{'Collapse'}</a>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </>
                    )
                    : (
                        <>
                            <FontAwesomeIcon icon={faArrowDown} />
                            <a>{'Expand'}</a>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </>
                    )}
            </div>
        </div>
    )
}
