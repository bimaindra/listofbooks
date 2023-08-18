const Header = () => {
	return (
		<header className="c-headernav">
			<div className="container">
				<div className="c-headernav__logo">BookStore</div>
				<div className="c-headernav__menu">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/favorite">Favorite</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
