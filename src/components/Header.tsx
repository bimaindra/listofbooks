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
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/favourite">Favourite</a>
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
