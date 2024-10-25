import PropTypes from 'prop-types';
import placeHolderImg from '../../assets/404.jpg'
import { Link } from 'react-router-dom';
const BlogCard = ({iteamCard}) => {

    const {social_image, title, published_at, description, id}= iteamCard;
    return (
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
    );
};

BlogCard.propTypes = {
    iteamCard: PropTypes.object.isRequired
}

export default BlogCard;