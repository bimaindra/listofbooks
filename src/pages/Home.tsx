import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BookType, FavoriteBookType } from '../types';
import { fetchBooks } from '../api';
import ReactPaginate from 'react-paginate';
import Card from '../components/Card';
import { useFavouriteBooks } from '../context/FavouriteBooksContext';

const Home = () => {
	const { isFavouriteBook, addFavouriteBook, removeFavouriteBook } =
		useFavouriteBooks();

	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 5;
	const endOffset = itemOffset + itemsPerPage;

	const {
		isLoading,
		isError,
		data: books,
	} = useQuery({
		queryKey: ['books'],
		queryFn: fetchBooks,
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

	const currentItems = books.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(books.length / itemsPerPage);

	// @ts-ignore
	const handleChangePagination = (event) => {
		const newOffset = (event.selected * itemsPerPage) % books.length;
		setItemOffset(newOffset);
	};

	const handleFavouriteBook = (book: FavoriteBookType) => {
		if (isFavouriteBook(book.id)) {
			removeFavouriteBook(book.id);
		} else {
			addFavouriteBook({
				id: book.id,
				title: book.title,
				author: book.author,
				cover: book.cover,
			});
		}
	};

	return (
		<div className="container">
			<h1 className="c-page-title">List of Books</h1>
			<div className="grid">
				{currentItems.map((book: BookType) => (
					<Card
						key={book.id}
						id={book.id}
						title={book.title}
						description={book.description}
						cover={book.cover}
						author={book.author}
						publicationDate={book.publicationDate}
						onHandleFavourite={handleFavouriteBook}
					/>
				))}
			</div>
			<div className="center">
				<div className="c-pagination">
					<ReactPaginate
						breakLabel="..."
						nextLabel="Next"
						onPageChange={handleChangePagination}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel="Previous"
						renderOnZeroPageCount={null}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
