import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";
import Spninner from "../components/Spninner/Spninner";


const Blogs = () => {
    const blogsData = useLoaderData();

    
    // loading Spinner
    const navigation = useNavigation();
    if (navigation.state === 'loading'){
        return <Spninner></Spninner>
    }

    return (
        <section className="light:bg-gray-100 light:text-gray-800">
            <div className="container max-w-6xl padding-b mx-auto space-y-6 sm:space-y-12">
                <Link
                    to={'/blog/2051656'}
                    className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 light:bg-gray-50">
                    <img src={blogsData[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 light:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogsData[0].title}</h3>
                        <span className="text-xs light:text-gray-600">{new Date(blogsData[0].published_at).toLocaleDateString()}</span>
                        <p>{blogsData[0].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        blogsData.slice(1, 19).map(iteamBlogCard => <BlogCard iteamCard={iteamBlogCard} key={iteamBlogCard.id}></BlogCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Blogs;