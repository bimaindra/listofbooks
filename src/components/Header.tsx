import { useState } from 'react';

const Header = () => {
	const [favorites] = useState(
		// @ts-ignore
		JSON.parse(localStorage.getItem('favoriteBooks')) || []
	);

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
							<span className="c-headernav__badge">{favorites.length}</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
