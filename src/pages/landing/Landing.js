import Navigation from "../../components/navigation/Navigation";

const Landing = ({ handlePageChange }) => {
  return (
    <div className="page-inner page-inner-landing">
      <h1 className="heading fade-in-heading">ben.js</h1>
      <Navigation handlePageChange={handlePageChange} landing={true} />
    </div>
  );
};

export default Landing;
