const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5298/api/products';

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error al obtener productos');
  }

  return response.json();
}
