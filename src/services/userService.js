import axios from 'axios';


export async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data; // Devuelve solo los datos de la respuesta
    } catch (error) {
        console.log(error);
        return []; // Devuelve un array vacío si hay un error
    }
};

export async function getPhotos() {
    try {
        const response = await axios.get(`https://randomuser.me/api/?key=${process.env.API_KEY}&results=15`);
        const users = response.data.results;
        const imageUrls = users.map(user => user.picture.medium);
        return imageUrls;
    } catch (error) {
        console.log(error);
        return [];
    }
}
