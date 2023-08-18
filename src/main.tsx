import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.tsx';
import './styles/main.scss';

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={query}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
		<ReactQueryDevtools />
	</QueryClientProvider>
);
