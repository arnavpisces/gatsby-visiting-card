import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <p>Hi there !</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>
export default AboutPage