import { BookType } from '../types';
import { formatDate } from '../utils/formatDate';

const Card = ({
	title,
	description,
	cover,
	author,
	publicationDate,
}: BookType) => {
	return (
		<div className="c-card">
			<div className="c-card__image">
				<img src={cover} />
			</div>
			<div className="c-card__body">
				<h3 className="c-card__title">{title}</h3>
				<p className="hidden">{description}</p>
			</div>
			<div className="c-card__foot">
				<span>{author}</span>
				<span>{formatDate(publicationDate)}</span>
			</div>
		</div>
	);
};

export default Card;
