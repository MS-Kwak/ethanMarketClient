import './ProductList.css';
import avatar from './../assets/avatar.png';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API_URL } from '../util/constants';

dayjs.extend(relativeTime);

const ProductList = ({ id, imageUrl, name, price, seller, createdAt }) => {
  return (
    <div className="productList">
      <div className="product-card">
        <Link className="product-link" to={`/products/${id}`}>
          <div>
            <img className="product-img" src={`${API_URL}/${imageUrl}`} />
          </div>
          <div className="product-contents">
            <span className="product-name">{name}</span>
            <span className="product-price">{price}원</span>
            <div className="product-footer">
              <div className="product-seller">
                <img className="product-avatar" src={avatar} />
                <span>{seller}</span>
              </div>
              <span className="product-date">{dayjs(createdAt).fromNow()}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
