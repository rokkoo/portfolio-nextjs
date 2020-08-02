import 'tailwindcss/tailwind.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import { useState } from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <div className="w-screen h-screen bg-indigo-500 flex flex-col">
         <main className="flex-1">
            <Component {...pageProps} />
         </main>
      </div>
   );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
