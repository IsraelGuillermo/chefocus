import axios from 'axios';

export function login(user) {
  return axios.post('/api/auth/login', user);
}

export function signupUser(user) {
  return axios.post('/api/signup', user);
}
export function updateProfilePicture(user) {
  return axios.put('/api/updateProfilePic', user);
}

export function submitrecipe(recipe) {
  return axios.post('/api/recipes', recipe);
}
export function getRecipes(recipe) {
  return axios.get('/api/getRecipes');
}
export function getRecipesByUser(id) {
  return axios.get('/api/getRecipesByUser/' + id);
}
