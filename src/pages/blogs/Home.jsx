import React from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'

const Home = () => {
    return (
        <Layout>
            <div className='flex justify-center flex-wrap p-8 gap-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </Layout>
    )
}

export default Home