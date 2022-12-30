import '../styles/globals.css'
import './signup.css'
import './login.css'
import '../components/Feed.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from 'next/app'
import AuthWrapper from '../context/auth'


export default function App({ Component, pageProps }: AppProps) {
  return( 
  <AuthWrapper>
  <Component {...pageProps} />
  </AuthWrapper>
  )
}
