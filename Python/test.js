const axios = require('axios');

// URL to encode
const url = 'https://www.youtube.com/watch?v=KbzGy3whpy0&pp=ygUSZWxvbiBtdXNrIGZpcmVzaGlw';
const encodedUrl = encodeURIComponent(url);

// POST request to the Flask server
axios.post('http://127.0.0.1:8000/youtube', `url=${encodedUrl}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });
