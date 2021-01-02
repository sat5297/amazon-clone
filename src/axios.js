import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-22a56/us-central1/api'    // THe API cloud function url.
});

export default instance;