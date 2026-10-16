const API_URL = 'https://dummyjson.com/products/category/mens-shirts';
export async function fetchRemoteProducts(signal) {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) throw new Error('Could not load remote products. Please try again.');
  const data = await response.json();
  return (data.products || []).map(p => ({id:p.id+10000,title:p.title,category:'shirts',price:Math.round(p.price*83),brand:p.brand||'StyleKart',rating:p.rating,thumbnail:p.thumbnail,description:p.description}));
}
