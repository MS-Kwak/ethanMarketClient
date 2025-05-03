import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import avatar from './../assets/avatar.png';
import { ImportOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API_URL } from '../util/constants';

dayjs.extend(relativeTime);

const Product = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(
        // `https://cc3ab12b-6e66-45c3-8ebd-795669040d5f.mock.pstmn.io/product/${params.id}`
        // ethanMarketServer 만들어 준 후에...
        `${API_URL}/products/${params.id}`
      )
      .then((response) => {
        // response
        console.log('response 결과: ', response);
        // const productData = response.data;
        // ethanMarketServer 만들어 준 후에...
        const productData = response.data.products;
        setProducts(productData);
      })
      .catch((error) => {
        // 오류발생시 실행
        console.log('error 발생:', error);
      })
      .then(() => {
        // 항상 실행
      });
  }, []);

  if (!products) {
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <div className="Product">
      <h1 className="tit-page">상세 제품 페이지: {params.id} 소개</h1>
      <div id="imageBox">
        <img src={`${API_URL}/${products.imageUrl}`} />
      </div>
      <div id="profileBox">
        <img src={avatar} />
        <span>{products.seller}</span>
      </div>
      <div id="contentsBox">
        <div id="name">{products.name}</div>
        <div id="status">{products.price}원</div>
        <div id="createdAt">{dayjs(products.createdAt).format('YYYY년 MM월 DD일')}</div>
        {/* pre태그는 줄바꿈을 그대로 보여줍니다 */}
        <pre id="description">{products.description}</pre>
      </div>
    </div>
  );
};

export default Product;
