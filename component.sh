if [[ $1 == '' ]]; then
	echo 'Please define a name for the component';
	exit 1;
fi;

mkdir components/$1
touch components/$1/$1.tsx
touch components/$1/index.tsx
touch components/$1/$1.module.scss

echo "import styles from './$1.module.scss';

interface Props {

};

const $1 = ({  }: Props): JSX.Element => {
	return (
		<section>$1</section>
	);
};

export default $1;" > components/$1/$1.tsx

echo "import $1 from './$1';

interface Props {

};

const Connected$1 = ({}: Props): JSX.Element => {
	return (
		<$1 />
	);
};

export default Connected$1;" > components/$1/index.tsx