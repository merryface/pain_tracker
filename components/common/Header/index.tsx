import Header from './Header';
// import getData from 'somewhere';

const ConnectedHeader = () => {
  return (
    <Header 
      date={ new Date() }
    />
  );
};

export default ConnectedHeader;

// logic for the component in this file. especially useful in functional and hooks