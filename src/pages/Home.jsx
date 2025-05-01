import { useEffect, useState } from 'react';
import axios from 'axios';
import banner1 from './../assets/banner1.png';
import ProductList from '../components/ProductList';

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://cc3ab12b-6e66-45c3-8ebd-795669040d5f.mock.pstmn.io/product')
      .then((response) => {
        // response
        // console.log('response 결과: ', response);
        const productData = response.data.products;
        console.log('response.data.products: ', productData);
        setProduct(productData);
      })
      .catch((error) => {
        // 오류발생시 실행
        console.log('error 발생:', error);
      })
      .then(() => {
        // 항상 실행
      });
  }, []);

  return (
    <div className="Home">
      <div id="banner">
        <img src={banner1} />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="productList">
        {product.map((item) => (
          <ProductList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
