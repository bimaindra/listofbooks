import { ChildrenType } from './types';
import Header from './components/Header';

const Layout = ({ children }: ChildrenType) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
