import Layout from './Layout';

interface Props {
	children: React.ReactNode
};

const ConnectedLayout = ({ children }: Props): JSX.Element => {
	return (
		<Layout>
			{ children }
		</Layout>
	);
};

export default ConnectedLayout;
