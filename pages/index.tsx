import React from 'react'
import Layout from '../components/Layout'
import { ListMaps } from '../components/maps/ListMaps'
import MainMap from '../components/maps/MainMap'

const Index: React.FunctionComponent = () => {
    
    return (
        <Layout title="Lifit">
            <MainMap></MainMap>
            <ListMaps></ListMaps>
        </Layout>
    )
}
export default Index