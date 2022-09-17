
 const API_ENDPOINT = !!process.env.REACT_APP_API_END_POINT ? process.env.REACT_APP_API_END_POINT : 'http://127.0.0.1:3000';
 console.log(process.env.REACT_APP_API_END_POINT);
 
 export { API_ENDPOINT }