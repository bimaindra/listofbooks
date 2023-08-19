import { useFavouriteBooks } from '../context/FavouriteBooksContext';
import { FavoriteBookType } from '../types';

const Favorite = () => {
	const { favouriteBooks, removeFavouriteBook } = useFavouriteBooks();

	return (
		<div className="container">
			<h1 className="c-page-title">List of Favourite Books</h1>
			{favouriteBooks.length ? (
				<>
					{favouriteBooks.map((book: FavoriteBookType) => (
						<div
							key={book.id}
							className="c-card-horizontal">
							<div className="c-card-horizontal__image">
								<img
									src={book.cover}
									alt={book.title}
								/>
							</div>
							<div className="c-card-horizontal__body">
								<h3>{book.title}</h3>
								<p>
									<em>{book.author}</em>
								</p>
							</div>
							<button
								className="btn"
								onClick={() => removeFavouriteBook(book.id)}>
								Remove
							</button>
						</div>
					))}
				</>
			) : (
				<p>There is no favourite book being added.</p>
			)}
		</div>
	);
};

export default Favorite;
