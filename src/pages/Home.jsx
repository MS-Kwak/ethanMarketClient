import { useEffect, useState } from 'react';
import axios from 'axios';
// import banner1 from './../assets/banner1.png'; // 서버로 옮김
import ProductList from '../components/ProductList';
import { API_URL } from '../util/constants';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      // .get('https://cc3ab12b-6e66-45c3-8ebd-795669040d5f.mock.pstmn.io/products')
      .get(`${API_URL}/products`)
      .then((response) => {
        // response
        // console.log('response 결과: ', response);
        const productData = response.data.products;
        console.log('productData: ', productData);
        setProducts(productData);
      })
      .catch((error) => {
        // 오류발생시 실행
        console.error('error 발생:', error);
      })
      .then(() => {
        // 항상 실행
      });

    // 슬라이딩 배너 가져오기
    axios
      .get(`${API_URL}/banners`)
      .then((response) => {
        const bannerData = response.data.banners;
        console.log('bannerData: ', bannerData);
        setBanners(bannerData);
      })
      .catch((error) => {
        // 오류발생시 실행
        console.error('error 발생:', error);
      })
      .then(() => {
        // 항상 실행
      });
  }, []);

  return (
    <div className="Home">
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((item) => {
          return (
            <Link to={item.href}>
              <div id="banner">
                <img src={`${API_URL}/${item.imageUrl}`} />
              </div>
            </Link>
          );
        })}
      </Carousel>
      <h1>판매되는 상품들</h1>
      <div id="productList">
        {products.map((item) => (
          <ProductList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
