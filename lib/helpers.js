export const imgUrl = 'https://image.tmdb.org/t/p/original';

export const fetchData = async (url) => {
  try {
    const result = await fetch(url);
    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
