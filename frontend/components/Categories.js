import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

const CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export default function Categories() {
  const { loading, error, data } = useQuery(CATEGORIES);

  console.log(data);
  if (loading) return <p>Загружаем контент...</p>;
  if (error) return <p>Ошибка перезагрузите страницу...</p>;

  return (
    <div>
      <span>Категории</span>
      {data.categories.map((category) => (
        <Link key={category.id} href="/category/[category]" as={`/category/${category.id}`}>
          <a>{category.name}</a>
        </Link>
      ))}
    </div>
  );
}
