//this folder has configuration for routes dependant on development or not.
const dev = process.env.NODE_ENV !== 'production';
console.log(dev)
export const server = dev ? 'http://localhost:8000' : 'https://lorelad-backend.herokuapp.com';