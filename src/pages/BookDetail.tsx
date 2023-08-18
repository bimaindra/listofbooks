import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '../utils/formatDate';
import { useEffect, useState } from 'react';
import { FavoriteBookType } from '../types';

const BookDetail = () => {
	const { id } = useParams();

	const [favorites, setFavorites] = useState(
		// @ts-ignore
		JSON.parse(localStorage.getItem('favoriteBooks')) || []
	);

	const favoritesId = favorites.map(
		(favorite: FavoriteBookType) => favorite.id
	);

	useEffect(() => {
		localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
	}, [favorites]);

	const fetchBook = () =>
		fetch(`https://my-json-server.typicode.com/cutamar/mock/books/${id}`).then(
			(res) => res.json()
		);

	const { isLoading, isError, data } = useQuery({
		queryKey: ['book'],
		queryFn: fetchBook,
	});

	if (isLoading) {
		return (
			<div className="container">
				<p>Loading...</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="container">
				<p>Something wrong while fetching the API!</p>
			</div>
		);
	}

	const handleAddToFavorite = () => {
		const isFavorite = favoritesId.includes(data.id);
		const newFavoriteBook = {
			id: data.id,
			title: data.title,
			author: data.author,
			cover: data.cover,
		};

		if (isFavorite) {
			const updatedFavorites = favorites.filter(
				(favorite: FavoriteBookType) => favorite.id !== data.id
			);
			setFavorites(updatedFavorites);
		} else {
			const updatedFavorites = [...favorites, newFavoriteBook];
			setFavorites(updatedFavorites);
		}
	};

	return (
		<div className="container">
			<h1 className="c-page-title">{data.title}</h1>
			<img
				src={data.cover}
				alt={data.title}
				className="img-book"
			/>
			<br />
			<br />
			<div className="mb-base">
				<h2>Synopsis</h2>
				<p>{data.description}</p>
			</div>
			<div className="mb-base">
				<h2>Author</h2>
				<p>{data.author}</p>
			</div>
			<div className="mb-base">
				<h2>Published at</h2>
				<p>{formatDate(data.publicationDate)}</p>
			</div>
			<hr />
			<div className="mb-base"></div>
			<div className="text-right">
				<button
					className="btn"
					onClick={handleAddToFavorite}>
					{favoritesId.includes(data.id)
						? 'Remove from Favorites'
						: 'Add to Favorites'}
				</button>
			</div>
		</div>
	);
};

export default BookDetail;
