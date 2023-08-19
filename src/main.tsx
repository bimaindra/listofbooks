import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.tsx';
import './styles/main.scss';

const queryCllient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryCllient}>
		<React.StrictMode>
			<App />
			<ReactQueryDevtools />
		</React.StrictMode>
	</QueryClientProvider>
);
