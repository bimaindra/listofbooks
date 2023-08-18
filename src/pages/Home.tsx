import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Card from '../components/Card';
import { BookType } from '../types';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
const Home = () => {
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 5;

	const fetchBooks = () =>
		fetch('https://my-json-server.typicode.com/cutamar/mock/books').then(
			(res) => res.json()
		);

	const { isLoading, isError, data } = useQuery({
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

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = data.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.length / itemsPerPage);

	// @ts-ignore
	const handleChangePagination = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	};

	return (
		<div className="container">
			<h1 className="c-page-title">List of Books</h1>
			<div className="grid">
				{currentItems.map((book: BookType) => (
					<Link
						to={`/book/${book.id}`}
						key={book.id}
						className="c-link-initial">
						<Card
							id={book.id}
							title={book.title}
							description={book.description}
							cover={book.cover}
							author={book.author}
							publicationDate={book.publicationDate}
						/>
					</Link>
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
