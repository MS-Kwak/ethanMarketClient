import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import avatar from './../assets/avatar.png';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cc3ab12b-6e66-45c3-8ebd-795669040d5f.mock.pstmn.io/product/${params.id}`
      )
      .then((response) => {
        // response
        console.log('response 결과: ', response);
        const productData = response.data;
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

  if (!product) {
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <div className="Product">
      <h1 className="tit-page">상세 제품 페이지: {params.id} 소개</h1>
      <div id="imageBox">
        <img src={product.imageUrl} />
      </div>
      <div id="profileBox">
        <img src={avatar} />
        <span>{product.seller}</span>
      </div>
      <div id="contentsBox">
        <div id="name">{product.name}</div>
        <div id="status">{product.price}원</div>
        <div id="createdAt">2025년 05월 02일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
};

export default Product;
