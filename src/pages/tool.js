import * as React from 'react'
import Layout from '../components/layout'
import SetCard from '../components/setcard'


const ToolPage = () => {

    return (
        <Layout pageTitle="Tool">
            <h2>Test GitHub-Api</h2>
            <SetCard></SetCard>
            <h2>Test Wikidata-REST Api</h2>
            <h2>Wikidata Image</h2>
            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"></img>
            <h2>Test Zotero-Api</h2>
        </Layout>
    )
}

export const Head = () => <title>Tool</title>

export default ToolPage