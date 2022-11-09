import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../app/store';
import Header from '../ui/home/header';
import Footer from '../ui/home/footer';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
