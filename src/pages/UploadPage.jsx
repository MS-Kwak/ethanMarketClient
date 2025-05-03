import { Button, Divider, Form, Input, InputNumber, message, Upload } from 'antd';
import camera from './../assets/camera.png';
import { useState } from 'react';
import { API_URL } from '../util/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const nav = useNavigate();

  const onsubmit = (values) => {
    console.log('등록하기 버튼 클릭: ', values);
    axios
      .post(`${API_URL}/products`, {
        name: values.name,
        description: values.description,
        seller: values.seller,
        price: Number(values.price),
        imageUrl: imgUrl,
      })
      .then((result) => {
        console.log('result: ', result);
        nav('/', { replace: true });
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다. ${error.message}`);
      });
  };

  const onChangeImage = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImgUrl(imageUrl);
    }
  };

  return (
    <div className="UploadPage">
      <Form name="basic" onFinish={onsubmit}>
        {/* name은 onSubmit에 들어가는 key값이 될거에요~ */}
        <Form.Item name="upload" label={<div className="upload-label">상품 사진</div>}>
          <Upload
            name="image"
            action={`${API_URL}/src/assets`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imgUrl ? (
              <img id="uploadImg" src={`${API_URL}/${imgUrl}`} />
            ) : (
              <div id="uploadImgPlaceholder">
                <img src={camera} />
                <span>이미지를 업로드 해주세요</span>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Divider />

        {/* rules를 정해야하는데 배열을 넣어줘야하고 안에 객체를 넣어줄 수 있어요 */}
        {/* required: true 이면, 꼭 입력해야하는 값이고, 입력하지 않았을때 오류멘트 노출 */}
        <Form.Item
          name="seller"
          label={<div className="upload-label">판매자 명</div>}
          rules={[{ required: true, message: '판매자 이름을 입력해 주세요.' }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="판매자 이름을 입력해 주세요."
          />
        </Form.Item>

        <Divider />

        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: '상품 이름을 입력해 주세요.' }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해 주세요."
          />
        </Form.Item>

        <Divider />

        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: '상품 가격을 입력해 주세요.' }]}
        >
          <InputNumber defaultValue={0} className="upload-price" size="large" />
        </Form.Item>

        <Divider />

        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: '상품 소개를 입력해 주세요.' }]}
        >
          <Input.TextArea
            id="productDescription"
            size="large"
            placeholder="상품 소개를 입력해 주세요."
            showCount={true}
            maxLength={300}
          />
        </Form.Item>

        <Form.Item>
          <Button id="submitButton" size="large" htmlType="submit">
            상품 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPage;
