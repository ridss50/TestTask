import { Avatar, Card, Col, Layout, List, Row, Select } from "antd";
import React from "react";
import "./style.css";

const { Option } = Select;
const { Content } = Layout;

const MovieView = ({ data, setCharacter, isLoading }) => {
  let dataItem = [];
  if (data) dataItem = data.map((item) => item.title);
  return (
    <div>
      <Layout className='layout'>
        <Content style={{ padding: "0 50px", height: "100vh" }}>
          <Row>
            <Col span={24} className='box-align'>
              <div className='site-layout-content'>
                <div>
                  <p className='font-Style'>Characters</p>
                  <Select
                    defaultValue=''
                    className='character-names'
                    onChange={(value) => {
                      setCharacter(value);
                    }}>
                    <Option value=''>Select</Option>
                    {["a", "b", "c", "d", "e", "f", "g", "h"].map(
                      (item, index) => (
                        <Option value={item} key={index}>
                          {item.toUpperCase()}
                        </Option>
                      )
                    )}
                  </Select>
                </div>
                <div>
                  <p className='movie-list-label font-Style'>List Of Movies</p>
                  <Card style={{ marginTop: 20 }} loading={isLoading}>
                    <List
                      dataSource={dataItem}
                      renderItem={(item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      )}
                    />
                  </Card>
                </div>
                <div>
                  <p className='movie-list-label font-Style'>
                    Name / Year Last Movie:
                  </p>
                  <p className='last-movie-name'>
                    {data ? (
                      <>
                        {data[data.length - 1].title}
                        {" - "}
                        {data[data.length - 1].date.split("-")[0]}
                      </>
                    ) : (
                      <>Loading...</>
                    )}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};
export default MovieView;
