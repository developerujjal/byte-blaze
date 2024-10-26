import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EmptyPage = ({message, address, label }) => {
    return (
        <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16">
            <p className="text-2xl">{message}</p>
            <Link to={address} className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-seconColor group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primaryColor group-hover:bg-seconColor"></span>
                <span className="relative text-black group-hover:text-white">{label}</span>
            </Link>
        </div>
    );
};

EmptyPage.propTypes = {
    message: PropTypes.string,
    address: PropTypes.string,
    label: PropTypes.string
}
export default EmptyPage;