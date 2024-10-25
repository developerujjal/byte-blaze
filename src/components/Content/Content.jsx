import { Link, useLoaderData } from "react-router-dom";
import placeHolderImg from '../../assets/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import './Content.css'

const Content = () => {
    const dataBlog = useLoaderData();
    const { cover_image, tags, title, body_html, url } = dataBlog;
    return (
        <div className="w-full cursor-pointer  mx-auto group border-2 border-solid p-2  border-opacity-30% hover:no-underline focus:no-underline light:bg-gray-50">

            <img role="presentation" className="object-cover w-full rounded h-44 light:bg-gray-500" src={cover_image || placeHolderImg} />

            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed light:border-gray-600">
                {
                    tags.map((tag, index) => <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline light:bg-violet-600 light:text-gray-50">#{tag}</a>)
                }
            </div>

            <div className="p-2 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"><Link to={url}>{title}</Link></h3>

                <div>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>

            </div>
        </div>
    );
};

export default Content;