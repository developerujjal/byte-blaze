import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { savedBlog } from "../Utility/Utility";


const Blog = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const blogDetails = useLoaderData();

    const { title,
        reading_time_minutes,
        published_at,
        comments_count,
        public_reactions_count } = blogDetails;

        
        const handleBookmark = (blog)=>{
            savedBlog(blog)
        }


    return (
        <div className="max-w-2xl px-1 py-16 mx-auto space-y-12">
            <article className="space-y-8 light:bg-gray-100 light:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center light:text-gray-600">

                        <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>

                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>


                    <div className="flex items-center -mx-2 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap light:bg-gray-100 light:text-gray-800">
                        <Link
                            to={''}
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg' : 'border-b'} light:border-gray-700 light:text-gray-600`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link
                            to={'author'}
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'} light:border-gray-700 light:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>

                        <div onClick={()=> handleBookmark(blogDetails)} className="ml-6 bg-bgColor rounded-full p-3 hover:scale-105 cursor-pointer overflow-hidden">
                            <MdBookmarkAdd size={22} color="#EF1DD2" />
                        </div>

                    </div>



                </div>
                <div className="light:text-gray-800">
                    {/* <p>Insert the actual text content here...</p> */}
                    <Outlet></Outlet>
                </div>
            </article>
            {/*             <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed light:border-gray-600">
                    {
                        tags.map((tag, index) => <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline light:bg-violet-600 light:text-gray-50">#{tag}</a>)
                    }
                </div>

            </div> */}
        </div>
    );
};

export default Blog;