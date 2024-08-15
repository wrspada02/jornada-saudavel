// These styles apply to every route in the application
import '@/app/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}