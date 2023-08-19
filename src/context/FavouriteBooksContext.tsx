import { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenType, FavoriteBookType } from '../types';

const FAVORITE_BOOKS_KEY = 'favouriteBooks';

interface FavouriteBooksContextType {
	favouriteBooks: FavoriteBookType[];
	addFavouriteBook: (book: FavoriteBookType) => void;
	removeFavouriteBook: (bookId: number) => void;
	isFavouriteBook: (book: number) => boolean;
}

const FavouriteBooksContext = createContext<FavouriteBooksContextType | null>(
	null
);

export const useFavouriteBooks = () => {
	const context = useContext(FavouriteBooksContext);
	if (!context) {
		throw new Error('useBookStore must be used within a BookStoreProvider');
	}
	return context;
};

export const FavouriteBooksProvider = ({ children }: ChildrenType) => {
	const [favouriteBooks, setFavouriteBooks] = useState<FavoriteBookType[]>(
		JSON.parse(localStorage.getItem(FAVORITE_BOOKS_KEY) || '[]')
	);

	const favoritesIds = favouriteBooks.map((book: FavoriteBookType) => book.id);

	useEffect(() => {
		localStorage.setItem(FAVORITE_BOOKS_KEY, JSON.stringify(favouriteBooks));
	}, [favouriteBooks]);

	const addFavouriteBook = (book: FavoriteBookType) => {
		setFavouriteBooks([...favouriteBooks, book]);
	};

	const removeFavouriteBook = (bookId: number) => {
		const updatedFavorites = favouriteBooks.filter(
			(book: FavoriteBookType) => book.id !== bookId
		);
		setFavouriteBooks(updatedFavorites);
	};

	const isFavouriteBook = (bookId: number) => {
		return favoritesIds.includes(bookId);
	};

	return (
		<FavouriteBooksContext.Provider
			value={{
				favouriteBooks,
				addFavouriteBook,
				removeFavouriteBook,
				isFavouriteBook,
			}}>
			{children}
		</FavouriteBooksContext.Provider>
	);
};
