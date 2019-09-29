import React from 'react'
import Layout from '../components/Layout'
import { RoutesList } from '../components/RoutesList'
const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Lifit">
            <h1>Lifit</h1>

            <RoutesList></RoutesList>
        </Layout>

    )
}
export default Index