import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Favourite from './pages/BookFavourite';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Layout>
				<BrowserRouter>
					<Routes>
						<Route
							index
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
				</BrowserRouter>
			</Layout>
		</>
	);
}

export default App;
