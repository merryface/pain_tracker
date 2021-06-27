import Footer from './Footer';
// import getData from 'somewhere';

const ConnectedHeader = () => {
  return (
    <Footer
    historical = {() => console.log("historical clicked!")}
    prevDay = {() => console.log("Prev clicked!")}
    nextDay = {() => console.log("Next clicked!")}
    />
  );
};

export default ConnectedHeader;