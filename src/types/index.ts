import React from 'react';

export interface ChildrenType {
	children: React.ReactNode;
}

export interface BookType {
	id: number;
	title: string;
	description: string;
	author: string;
	cover: string;
	publicationDate: string;
}

export interface FavoriteBookType {
	id: number;
	title: string;
	author: string;
	cover: string;
}
