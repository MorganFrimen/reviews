import { gql, useQuery } from '@apollo/client';

export default function RevieweDetails() {
  const REVIEW = gql`
    query {
      reviews {
        id
        title
        rating
        body
      }
    }
  `;

  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  if (loading) return <p>Загружаем контент...</p>;
  if (error) return <p>Ошибка перезагрузите страницу...</p>;

  return (
    <div>
      <h2>{data.review.title}</h2>
    </div>
  );
}
