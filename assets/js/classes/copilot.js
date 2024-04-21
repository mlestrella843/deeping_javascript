
async function asyncLoadPost(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function fetchData() {
    const url = 'https://restcountries.com/v3/all'; // Ejemplo de URL de una API compatible con CORS
    try {
        const post = await asyncLoadPost(url);
        console.log(post);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();



