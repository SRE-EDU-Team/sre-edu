import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

export default function Page (): JSX.Element {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Layout title={siteConfig.title}>
            <div>
                <div className={'p-4 bg-indigo-800'}>
                    <div className={'prose dark:prose-invert m-auto text-white text-center'}>
                        <h1 className={'text-white'}>
                            {siteConfig.title}
                        </h1>
                        <p>{siteConfig.tagline}</p>
                    </div>
                </div>
                <div className={'prose dark:prose-invert p-2'}>
                    <Link to={'/docs/lections'}>{'Лекции'}</Link><br/>
                </div>
            </div>
        </Layout>
    )
}
