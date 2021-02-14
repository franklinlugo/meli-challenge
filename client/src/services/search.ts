import { SearchResponse } from 'constants/types';

async function search(searchQuery: string): Promise<SearchResponse> {
  return fetch(`http://localhost:4000/items?search=${searchQuery}`).then((res) => res.json());
}

export default search;
