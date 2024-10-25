import { Link } from "react-router-dom";
import Wave from "../../assets/wave.svg"

const Hero = () => {
    return (
        <div className="hero flex flex-col relative justify-center bg-base-200 min-h-[calc(100vh-100px)]">
            <div className="-mt-20">
                <div className="hero-content text-center -mt-4">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to <span className="text-5xl font-bold bg-gradient-to-r from-primaryColor via-blue-500 to-seconColor bg-300% text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
                        <p className="py-6">
                            ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
                        </p>

                        <div className="flex gap-3 justify-center">
                            <Link to={'/blogs'} className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-seconColor group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primaryColor group-hover:bg-seconColor"></span>
                                <span className="relative text-black group-hover:text-white">Read Blogs</span>
                            </Link>

                            <Link to={'/bookmarks'} className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-seconColor group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primaryColor group-hover:bg-seconColor"></span>
                                <span className="relative text-black group-hover:text-white">Bookmarks</span>
                            </Link>

                        </div>
                        
                    </div>
                </div>
            </div>

            <img className="absolute bottom-0 w-full" src={Wave} alt="" />
        </div>
    );
};

export default Hero;