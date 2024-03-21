import React, { useState } from 'react';
import {
  Radio,
  Space,
  Tabs,
  Input,
  Select,
  Slider,
  Divider,
  Upload,
  Button,
} from 'antd';
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  TwitterCircleFilled,
  GithubFilled,
  DiscordFilled,
  YoutubeFilled,
  SlackCircleFilled,
  AreaChartOutlined,
  FontSizeOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import './create.scss';
const { TabPane } = Tabs;
const { Option } = Select;

const Create = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const [fontSize, setFontSize] = useState(16);
  const [lineSpacing, setLineSpacing] = useState(1);

  const changeTabPosition = () => {
    setTabPosition('left');
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleLineSpacingChange = (value) => {
    setLineSpacing(value);
  };

  return (
    <>
      {/* <Space style={{ marginBottom: 14 }}>
        Tab position:
        <Radio.Group
          value={tabPosition}
          onChange={changeTabPosition}
        >
          <Radio.Button value='left'>left</Radio.Button>{' '}
        </Radio.Group>
      </Space> */}
      <Tabs
        tabPosition={tabPosition}
        className='left_tabs'
      >
        <TabPane
          tab='Templates'
          key='1'
        >
          <p>Content for the first tab</p>
        </TabPane>

        <TabPane
          tab='Details'
          key='2'
        >
          {/* Content for the second tab */}
          <Input
            placeholder='Name'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Title'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Company'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Phone'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Mobile'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Website'
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Email'
            style={{ marginBottom: 10 }}
          />
          <Input.TextArea
            placeholder='Address'
            rows={4}
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder='Extensions'
            style={{ marginBottom: 10 }}
          />
        </TabPane>

        <TabPane
          tab='Upload Image'
          key='3'
        >
          <div className='editor-images-tab'>
            <div className='editor-image border-dashed'>
              <div
                data-v-4d42739c=''
                id='details_photo'
                class='editor-image-tltp-target'
              >
                &nbsp;
              </div>
              <div className='upload-image-container'>
                <Upload>
                  <Button icon={<PlusOutlined />}>Upload Photo or Logo</Button>
                </Upload>
                <div className='upload-image-container-tip mt-2'>
                  Image should be at least 100 X 100px
                </div>
              </div>
            </div>
            <div className='editor-image-tab-actions'>
              <Button icon={<PlayCircleOutlined />}>Animate</Button>
            </div>
          </div>
        </TabPane>

        <TabPane
          tab='Socials'
          key='4'
        >
          <Input
            placeholder='Linkedin Profile URL'
            prefix={
              <LinkedinFilled
                style={{
                  fontSize: '30px',
                  color: '#0077B5',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />

          <Input
            placeholder='Instagram Username'
            prefix={
              <InstagramFilled
                style={{
                  fontSize: '30px',
                  color: '#F56040',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />

          <Input
            placeholder='Facebook URL'
            prefix={
              <FacebookFilled
                style={{
                  fontSize: '30px',
                  color: '#3B5998',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />

          <Input
            placeholder='Github URL'
            prefix={
              <GithubFilled
                style={{
                  fontSize: '30px',
                  color: '#333',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />

          <Input
            placeholder='Discord URL'
            prefix={
              <DiscordFilled
                style={{
                  fontSize: '30px',
                  color: '#5865F2',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />

          <Input
            placeholder='Slack URL'
            prefix={
              <SlackCircleFilled
                style={{
                  fontSize: '30px',
                  color: '#4A154B',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />
          <Input
            placeholder='Youtube URL'
            prefix={
              <YoutubeFilled
                style={{
                  fontSize: '30px',
                  color: '#CD201F',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />

          <Input
            placeholder='Twitter Handle'
            prefix={
              <TwitterCircleFilled
                style={{
                  fontSize: '30px',
                  color: '#000000',
                  borderStyle: 'none',
                  marginBottom: 10,
                }}
              />
            }
          />
        </TabPane>

        <TabPane
          tab='Design'
          key='5'
        >
          <Divider orientation='left'>Signature Style</Divider>
          <Select
            defaultValue='Arial'
            style={{ width: 120, marginBottom: 10 }}
          >
            <Option value='Arial'>Arial</Option>
            <Option value='Times New Roman'>Times New Roman</Option>
            {/* Add other font options */}
          </Select>
          <Divider orientation='left'>Template Color</Divider>
          <Input
            placeholder='Select Color'
            addonAfter={<HighlightOutlined />}
            style={{ marginBottom: 10 }}
          />
          {/* Add color picker */}
          <Divider orientation='left'>Font Scale</Divider>
          <Slider
            min={12}
            max={36}
            defaultValue={fontSize}
            onChange={handleFontSizeChange}
            style={{ marginBottom: 10 }}
          />
          {/* Add slider for font size */}
          <Divider orientation='left'>Line Spacing</Divider>
          <Slider
            min={0.5}
            max={2}
            step={0.1}
            defaultValue={lineSpacing}
            onChange={handleLineSpacingChange}
            style={{ marginBottom: 10 }}
          />
          {/* Add slider for line spacing */}
        </TabPane>
      </Tabs>
    </>
  );
};

export default Create;
