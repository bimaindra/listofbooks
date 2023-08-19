import { Link } from 'react-router-dom';
import { useFavouriteBooks } from '../context/FavouriteBooksContext';

const Header = () => {
	const { favouriteBooks } = useFavouriteBooks();

	return (
		<header className="c-headernav">
			<div className="container">
				<div className="c-headernav__logo">WD Book Store</div>
				<div className="c-headernav__menu">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/favourite">Favourite</Link>
							<span className="c-headernav__badge">
								{favouriteBooks.length}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
