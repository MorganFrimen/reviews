import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Categories from '../components/categories';
import '../styles/globals.css';
import { API_URL } from '../utils/urls';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Categories />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
