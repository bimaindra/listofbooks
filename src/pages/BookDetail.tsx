import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '../utils/formatDate';
import { fetchBook } from '../api';
import { useFavouriteBooks } from '../context/FavouriteBooksContext';

const BookDetail = () => {
	const { id } = useParams();
	const { isFavouriteBook, addFavouriteBook, removeFavouriteBook } =
		useFavouriteBooks();

	const {
		isLoading,
		isError,
		data: book,
	} = useQuery({
		queryKey: ['book', id],
		queryFn: () => fetchBook(Number(id)),
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

	return (
		<div className="container">
			<h1 className="c-page-title">{book.title}</h1>
			<img
				src={book.cover}
				alt={book.title}
				className="img-book"
			/>
			<br />
			<br />
			<div className="mb-base">
				<h2>Synopsis</h2>
				<p>{book.description}</p>
			</div>
			<div className="mb-base">
				<h2>Author</h2>
				<p>{book.author}</p>
			</div>
			<div className="mb-base">
				<h2>Published at</h2>
				<p>{formatDate(book.publicationDate)}</p>
			</div>
			<hr />
			<div className="mb-base"></div>
			<div className="text-right">
				{isFavouriteBook(book.id) ? (
					<button
						className="btn"
						onClick={() => removeFavouriteBook(book.id)}>
						Remove from Favorites
					</button>
				) : (
					<button
						className="btn"
						onClick={() =>
							addFavouriteBook({
								id: book.id,
								title: book.title,
								author: book.author,
								cover: book.cover,
							})
						}>
						Add to Favorites
					</button>
				)}
			</div>
		</div>
	);
};

export default BookDetail;
