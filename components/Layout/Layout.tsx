import Header from '../common/Header';
import Footer from '../common/Footer';

interface Props {
	children: React.ReactNode
};

const Layout = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Header />

			<main>
				{ children }
			</main>

			<Footer />
		</>
	);
};

export default Layout;
