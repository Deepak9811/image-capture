import React, { PureComponent } from 'react'
import Head from 'next/head'
import Home from './home'

class Index extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <>
      <Head>
        <title>Vizsense</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home/>
    </>
    )
  }
}

export default Index

