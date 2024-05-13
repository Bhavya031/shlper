const axios = require('axios');

async function getDataFromAPI(url) {
    try {
        const response = await axios.post('http://127.0.0.1:5001/transcribe', { url });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Example usage
const url = 'https://youtu.be/KbzGy3whpy0';
getDataFromAPI(url)
    .then(data => {
        console.log('Data:', data[0]["text"]);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });