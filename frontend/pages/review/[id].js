import axios from 'axios';
import { API_URL_FETH } from '../../utils/urls';

export default function id({ review }) {
  return (
    <div>
      <h2>{review.title}</h2>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(`${API_URL_FETH}/reviews/${id}`);
  const data = await res.data;
  return {
    props: {
      review: data,
    }, // will be passed to the page component as props
  };
}
