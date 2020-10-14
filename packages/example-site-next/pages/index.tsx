import Link from 'next/link'
// import Layout from '../components/Layout'
import { Layout } from 'next-tinacms-doc-toolkit'
import { DocumentConfig } from 'next-tinacms-doc-toolkit/build/interfaces'

const Test = ()=><div>this is a test</div>

const CONFIG: DocumentConfig = {
  LinkWrapper: ({to, children})=>{
    return <Link href={to} as={to}>{children}</Link>
  },
  title: 'this is a test',
  pages: [{ Component: Test, label: 'page 1',  slug: '/', code: 'let test = \'asdaf\''}, { Component: Test, label: 'page 2',  slug: '/page-2',code: 'let test = \'page 2\''}, { Component: Test, label: 'page 3',  slug: '/page-3'}, { Component: Test, label: 'page 4',  slug: '/page-4'} ] 
}
const IndexPage = () => (
  <Layout currentSlug='/page-2' config={CONFIG}/>
)


export default IndexPage
