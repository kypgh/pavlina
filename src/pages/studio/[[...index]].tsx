import { NextStudio } from 'next-sanity/studio'
import Head from 'next/head'

import config from '../../../sanity.config'
import { StudioAuth } from '../../sanity/components/StudioAuth'

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Pavlina Blog Studio</title>
        <meta name="description" content="Content management studio for Pavlina Blog" />
        <meta name="robots" content="noindex" />
        <style>{`
          html, body {
            overflow: auto !important;
            height: 100% !important;
          }
          #__next {
            height: 100% !important;
          }
        `}</style>
      </Head>
      <StudioAuth>
        <NextStudio config={config} />
      </StudioAuth>
    </>
  )
}