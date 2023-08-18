import { useEffect, useState } from 'react';
import { FavoriteBookType } from '../types';

const Favorite = () => {
	const [favorites, setFavorites] = useState(
		// @ts-ignore
		JSON.parse(localStorage.getItem('favoriteBooks')) || []
	);

	const handleRemoveBook = (bookId: number) => {
		const updatedFavorites = favorites.filter(
			(favorite: FavoriteBookType) => favorite.id !== bookId
		);
		setFavorites(updatedFavorites);
	};

	useEffect(() => {
		localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
	}, [favorites]);

	return (
		<div className="container">
			<h1 className="c-page-title">List of Favorite Books</h1>
			{favorites.length ? (
				<>
					{favorites.map((item: FavoriteBookType) => (
						<div
							key={item.id}
							className="c-card-horizontal">
							<div className="c-card-horizontal__image">
								<img
									src={item.cover}
									alt={item.title}
								/>
							</div>
							<div className="c-card-horizontal__body">
								<h3>{item.title}</h3>
								<p>
									<em>{item.author}</em>
								</p>
							</div>
							<button
								className="btn"
								onClick={() => handleRemoveBook(item.id)}>
								Remove
							</button>
						</div>
					))}
				</>
			) : (
				<p>There is no favorite book.</p>
			)}
		</div>
	);
};

export default Favorite;
