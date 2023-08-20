import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { FavoriteBookType } from '../types';
import { useFavouriteBooks } from '../context/FavouriteBooksContext';

interface CardType {
	id: number;
	title: string;
	description: string;
	author: string;
	cover: string;
	publicationDate: string;
	onHandleFavourite: (book: FavoriteBookType) => void;
}

const Card = ({
	id,
	title,
	cover,
	author,
	publicationDate,
	onHandleFavourite,
}: CardType) => {
	const { isFavouriteBook } = useFavouriteBooks();

	const handleFavouriteBook = () => {
		onHandleFavourite({ id, title, cover, author });
	};
	return (
		<div className="c-card">
			<div className="c-card__image">
				<img src={cover} />
			</div>
			<div className="c-card__body">
				<h3 className="c-card__title">{title}</h3>
				<p className="mb-base">
					<strong>By:</strong> <br />
					{author}
				</p>
				<p className="mb-base">
					<strong>Published at:</strong> <br />
					{formatDate(publicationDate)}
				</p>
			</div>
			<div className="c-card__foot">
				<Link to={`/book/${id}`}>View detail</Link>
				<button
					className="btn"
					onClick={handleFavouriteBook}>
					{isFavouriteBook(id) ? 'Remove to favorite' : 'Add to favorite'}
				</button>
			</div>
		</div>
	);
};

export default Card;
