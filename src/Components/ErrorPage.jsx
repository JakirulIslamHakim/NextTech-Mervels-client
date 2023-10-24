import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" ">
      <img
        className="h-[700px] md:w-3/4 mx-auto "
        src={"https://i.ibb.co/Xy1bRgn/404.gif"}
        alt=""
      />
      <button className="btn btn-primary flex justify-center  mx-auto">
        <Link  to={-1} replace= {true}>Go Back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
