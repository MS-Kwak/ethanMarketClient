import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import avatar from './../assets/avatar.png';
import { ImportOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API_URL } from '../util/constants';
import { Button, message } from 'antd';

dayjs.extend(relativeTime);

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
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
        setProduct(productData);
      })
      .catch((error) => {
        // 오류발생시 실행
        console.log('error 발생:', error);
      })
      .then(() => {
        // 항상 실행
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const onClickPurchase = () => {
    axios
      .post(`${API_URL}/purchase/${params.id}`)
      .then((result) => {
        message.info('상품 구매가 완료되었습니다.');
        getProduct();
      })
      .catch((error) => {
        message.error(`상품구매에 에러가 발생했습니다 ${error.message}`);
      });
  };

  if (!product) {
    return <div>상품 정보 데이터 로딩중입니다...</div>;
  }

  return (
    <div className="Product">
      <h1 className="tit-page">상세 제품 페이지: {params.id} 소개</h1>
      <div id="imageBox">
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profileBox">
        <img src={avatar} />
        <span>{product.seller}</span>
      </div>
      <div id="contentsBox">
        <div id="name">{product.name}</div>
        <div id="status">{product.price}원</div>
        <div id="createdAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
        <Button
          onClick={onClickPurchase}
          id="purchaseButton"
          size="large"
          type="primary"
          danger
          disabled={product.soldout === 1}
        >
          잽싸게 구매하기
        </Button>
        {/* pre태그는 줄바꿈을 그대로 보여줍니다 */}
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
};

export default Product;
