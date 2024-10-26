import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utility/Utility";
import BlogCard from "../components/BlogCard/BlogCard";
import EmptyPage from "../components/EmptyPage/EmptyPage";

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([])
    // const blogs = getBlogs();

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    const handleRemoveBookmark = (id) => {
        deleteBlog(id);
        const newData = getBlogs();
        setBlogs(newData)
        
    }


    if(blogs.length<1){
        return  <EmptyPage
        message="No Bookmarks Found"
        address={'/blogs'}
        label={'Go to Blogs'}
        ></EmptyPage>
    }

    return (
        <div className="grid px-4 sm:px-8 lg:px-16 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-100px)]">

            {
                blogs.map(elementBlog => <BlogCard
                    deleteAble={true}
                    iteamCard={elementBlog}
                    handleRemoveBookmark={handleRemoveBookmark}
                    key={elementBlog.id}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;