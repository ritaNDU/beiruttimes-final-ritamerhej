import axios from 'axios';
import {Alert} from 'react-native';
import Post from '../data/post.type';
import {BASE_URL, POSTS_ENDPOINT, POSTS_LIMIT} from './api.data';

export function storePostInApi(post: Post) {
  axios
    .post(BASE_URL + `${POSTS_ENDPOINT}/`, post)
    .catch(() =>
      Alert.alert("An error occured. Your post couldn't be added. Try again."),
    );
  Alert.alert('Meow added successfully.');
}

export async function getPostsFromApi(page: string) {
  const url = new URL(BASE_URL + 'posts');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', JSON.stringify(POSTS_LIMIT));
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  const posts: Post[] = [];
  if (response) {
    const data = response.data;
    console.log(data);
  }
  return posts;
}

export async function getPostFromApi(postId: string) {
  const url = new URL(BASE_URL + POSTS_ENDPOINT);
  url.searchParams.append('id', postId);
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  if (response) {
    const data = response.data;
    console.log(data);
  } else {
    Alert.alert("Couldn't get post.");
  }
}
