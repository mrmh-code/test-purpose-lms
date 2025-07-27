import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {CourseProvider} from '../../common/context/CourseContext';

export default function App({Component, pageProps}: AppProps) {
  return (
    <CourseProvider>
      <Component {...pageProps} />{' '}
    </CourseProvider>
  );
}
