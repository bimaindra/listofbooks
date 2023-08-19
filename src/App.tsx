import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavouriteBooksProvider } from './context/FavouriteBooksContext';
import Layout from './Layout';
import Home from './pages/Home';
import Favourite from './pages/BookFavourite';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';

function App() {
	return (
		<FavouriteBooksProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/favourite"
							element={<Favourite />}
						/>
						<Route
							path="/book/:id"
							element={<BookDetail />}
						/>
						<Route
							path="*"
							element={<NotFound />}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</FavouriteBooksProvider>
	);
}

export default App;
