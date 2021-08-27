export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/graphql';
export const API_URL_FETH = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

/**
 *@param {any} image
 */
export const fromImageToUrl = (image) => {
  if (!image) {
    return '/vercel.svg', '/logo.png';
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }
  return image.url;
};
