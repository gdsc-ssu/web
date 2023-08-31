import type { AppProps } from 'next/app';
import './global.css';
import { LazyMotion } from 'framer-motion';

const loadFeatures = () =>
  import('@/utils/framerMotionFeatures').then((res) => res.default);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <Component {...pageProps} />
    </LazyMotion>
  );
}
