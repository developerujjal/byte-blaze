import PropTypes from 'prop-types';
import placeHolderImg from '../../assets/404.jpg'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";


const BlogCard = ({ iteamCard, deleteAble, handleRemoveBookmark }) => {

    const { social_image, title, published_at, description, id } = iteamCard;



    return (
        <div className='flex relative'>
            <Link
                to={`/blog/${id}`}
                className="max-w-sm mx-auto group transition border-2 border-solid border-seconColor p-2 hover:scale-105 hover:border-primaryColor border-opacity-30% hover:no-underline focus:no-underline light:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 light:bg-gray-500" src={social_image || placeHolderImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs light:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>

            {
                deleteAble === true && (
                    <div onClick={()=> handleRemoveBookmark(id)} className='absolute bg-seconColor p-4 sm:p-2 lg:p-4 md:p-3 rounded-full cursor-pointer -top-5 -right-5 sm:-top-4 md:-top-4 lg:-top-5'>
                        <MdDelete
                        size={25} 
                        className='text-primaryColor'></MdDelete>
                    </div>
                )}

        </div>
    );
};

BlogCard.propTypes = {
    iteamCard: PropTypes.object.isRequired,
    deleteAble: PropTypes.bool,
    handleRemoveBookmark: PropTypes.func
}

export default BlogCard;