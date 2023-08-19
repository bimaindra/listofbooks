const BASE_URL = 'https://my-json-server.typicode.com/cutamar/mock/books';

export const fetchBooks = async () =>
	await fetch(BASE_URL).then((res) => res.json());

export const fetchBook = async (id: number) =>
	await fetch(`${BASE_URL}/${id}`).then((res) => res.json());
