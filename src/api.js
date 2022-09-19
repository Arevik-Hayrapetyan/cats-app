export const getCategories = async() =>{
  const jsonData = await fetch("https://api.thecatapi.com/v1/categories")
  const data = await jsonData.json()
  return data
}