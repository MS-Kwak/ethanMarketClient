import './ProductList.css';
import avatar from './../assets/avatar.png';
import { getImage } from '../util/get-image';
import { Link } from 'react-router-dom';

const ProductList = ({ id, imageUrl, name, price, seller }) => {
  return (
    <div className="productList">
      <div className="product-card">
        <Link className="product-link" to={`/product/${id}`}>
          <div>
            <img className="product-img" src={imageUrl} />
          </div>
          <div className="product-contents">
            <span className="product-name">{name}</span>
            <span className="product-price">{price}원</span>
            <div className="product-seller">
              <img className="product-avatar" src={avatar} />
              <span>{seller}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
