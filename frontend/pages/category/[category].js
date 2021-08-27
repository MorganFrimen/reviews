import { gql, useQuery } from '@apollo/client';

const REVIEWS = gql`
  query ($id: ID) {
    categories(id: $id) {
      id
      name
      reviews {
        id
        title
        rating
        body
        categories {
          name
          id
        }
      }
    }
  }
`;
export default function Category() {
  return <div>category</div>;
}
