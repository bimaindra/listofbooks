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
				<span>
					<strong>By:</strong> <br />
					{author}
				</span>
				<span className="text-right">
					<strong>Published at:</strong> <br />
					{formatDate(publicationDate)}
				</span>
			</div>
		</div>
	);
};

export default Card;
