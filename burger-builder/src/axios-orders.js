import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-dec5d.firebaseio.com/'
});

export default instance;