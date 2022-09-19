export const getCategories = async () => {
  const jsonData = await fetch("https://api.thecatapi.com/v1/categories");
  const data = await jsonData.json();
  return data;
};

export const getCatData = async (id, page = 1) => {
  const jsonData = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`
  );
  const data = await jsonData.json();
  return data;
};
