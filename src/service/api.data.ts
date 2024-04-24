// TODO: URGENT: Tnis should be turned into environment variable as soon as I finish setting up the interceptor

export const BASE_URL = 'https://backend-practice.euriskomobility.me';

export const LOGIN_ENDPOINT = '/login';
export const SIGNUP_ENDPOINT = '/signup';
export const REFRESH_TOKEN_ENDPOINT = '/refresh-token';

export const TOKEN_EXPIRATION = '1s';

// This number here is big to make sure that posts for all the needed users are fetched
// This is because the api doesn't sort the posts
export const POSTS_LIMIT = 15;
export const POSTS_ENDPOINT = '/posts';
