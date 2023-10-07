import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../pages/blog/nav'
import Footer from '../pages/blog/footer'
import Home from '../pages/blog/home'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Nav />
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
