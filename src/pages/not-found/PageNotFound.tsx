import PageNotFoundSVG from "../../components/svg/PageNotFoundSVG";
import { Button } from "../../components/buttons/Button";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-background text-onBackground gap-20">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-error">404</h1>
          <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found.</h2>
          <p className="text-gray-600 mt-2">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-6">
            <Button href="/">Go Back Home</Button>
          </div>
        </div>
        <PageNotFoundSVG />
      </div>
    </div>
  );
};

export default PageNotFound;
