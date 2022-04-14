/* eslint-disable no-unused-vars */
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

function Homepage() {
// eslint-disable-next-line no-unused-vars
const { data, isFetching } = useGetCryptosQuery();

console.log('TEST!!!!!!!!!!', data);
console.log('TEST!!!!!!!!!!', isFetching);

  return (
    <>
      <Title
        level={2}
        className="heading"
      >Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value="5" /></Col>
        <Col span={12}> <Statistic title="Total Exchanges" value="5" /></Col>
        <Col span={12}> <Statistic title="Total Market Cup" value="5" /></Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value="5" /></Col>
        <Col span={12}> <Statistic title="Total Markets" value="5" /></Col>
      </Row>
    </>
  );
}

export default Homepage;
