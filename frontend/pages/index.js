import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>Загружаем контент...</p>;
  if (error) return <p>Ошибка перезагрузите страницу...</p>;

  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {data.reviews.map((review) => (
          <div key={review.id}>
            <strong>{review.rating}</strong>
            <h2>{review.title}</h2>
            <p>{review.body.substring(0, 100)}</p>
            <Link href="/review/[RevieweDetails]" as={`/review/${review.id}`}>
              <a>Подробнее</a>
            </Link>
          </div>
        ))}
      </main>
      <main className={styles.main}>
        {data.news.map((news) => (
          <div key={news.id}>
            <h2>{news.title}</h2>
            <p>{news.body.substring(0, 100)}</p>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

const REVIEWS = gql`
  query {
    reviews {
      id
      title
      rating
      body
    }
    news {
      id
      title
      body
      data
    }
  }
`;
