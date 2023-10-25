import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative">
      <img
        className="h-screen w-full mx-auto "
        src={"https://i.ibb.co/Xy1bRgn/404.gif"}
        alt=""
      />
      {/* <button className="btn btn-primary flex justify-center absolute top-11  mx-auto">
        <Link  to={-1} replace= {true}>Go Back</Link>
      </button> */}
    </div>
  );
};

export default ErrorPage;
