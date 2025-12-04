import { $authHost, $host } from "./index"

export const getAllFilterCars = async (filterParams) => {
  console.log("🚀 🚀 🚀  _ getAllFilterCars _ filterParams:", filterParams)
  try {
    const response = await fetch('/api/cars/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(filterParams),
    });
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении отфильтрованных автомобилей:', error);
    throw error;
  }
};


export const createCar = async (car) => {
	const { data } = await $authHost.post('api/cars', car)
	return data
}


export const getAllCars = async () => {
	try {
		const response = await $host.get('api/cars');
		return response.data;
	} catch (error) {
		console.error('Ошибка при получении всех машин:', error);
		throw error;
	}
};


export const updateOneCar = async (product) => {
	const { data } = await $authHost.put('api/cars/', product)
	return data
}


export const getOneCar = async (id) => {
	const { data } = await $host.get('api/cars/' + id)
	return data
}
export const getRecommendedProduct = async () => {
	const { data } = await $host.get('api/product/recommended')
	return data
}

export const deleteOneCar = async (id) => {
	const { data } = await $authHost.delete('api/cars/' + id)
	return data
}



