import toast from "react-hot-toast";

const getBlogs = ()=>{
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}


const savedBlog = (blog)=>{
    const blogs = getBlogs();
    const isExist = blogs.find((itemBlog)=> itemBlog.id === blog.id);
    if(isExist){
        return toast.error('Already Bookmarked');
    }

    blogs.push(blog);

    sevedLocalStorage(blogs)
}


const sevedLocalStorage = (blogs)=>{
    const stringifyBlogs = JSON.stringify(blogs);
    localStorage.setItem('blogs', stringifyBlogs);
    toast.success('Blog Bookmarked Successfully!')
}


const deleteBlog = (id)=>{
    const blogs = getBlogs();
    const remaining = blogs.filter((blog)=> blog.id !== id);

    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog Removed from Bookmark!')
}



export{getBlogs, savedBlog, deleteBlog}