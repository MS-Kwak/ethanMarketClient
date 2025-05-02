import { Button, Divider, Form, Input, InputNumber, Upload } from 'antd';
import camera from './../assets/camera.png';

const UploadPage = () => {
  const onsubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="UploadPage">
      <Form name="basic" onFinish={onsubmit}>
        {/* name은 onSubmit에 들어가는 key값이 될거에요~ */}
        <Form.Item name="upload" label={<div className="upload-label">상품 사진</div>}>
          <Upload name="image" listType="picture" showUploadList={false}></Upload>
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
            등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPage;
