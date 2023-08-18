import React from 'react';

export type ChildrenType = {
	children: React.ReactNode;
};

export type BookType = {
	id: number;
	title: string;
	description: string;
	author: string;
	cover: string;
	publicationDate: string;
};

export type FavoriteBookType = {
	id: number;
	title: string;
	description: string;
	author: string;
	cover: string;
	publicationDate: string;
};
