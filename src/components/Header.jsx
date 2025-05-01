import './Header.css';
import logo from './../assets/logo.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Icon, { DownloadOutlined } from '@ant-design/icons';

const Header = ({ onClick }) => {
  return (
    <header id="Header">
      <div id="headerArea">
        <Link to={'/'}>
          <img src={logo} />
        </Link>
        <Button onClick={onClick} icon={<DownloadOutlined />}>
          상품 업로드
        </Button>
      </div>
    </header>
  );
};

export default Header;
