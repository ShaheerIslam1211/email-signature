import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

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
const { items } = Tabs;
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

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };
  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleComapnyInputChange = (e) => {
    setCompany(e.target.value);
  };
  const handlePhoneInputChange = (e) => {
    setPhone(e.target.value);
  };
  const handleMobileInputChange = (e) => {
    setMobile(e.target.value);
  };

  const handleWebsiteInputChange = (e) => {
    setWebsite(e.target.value);
  };
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressInputChange = (e) => {
    setAddress(e.target.value);
  };
  // const [values, setValues] = useState({
  //   name: '',
  //   title: '',
  //   company: '',
  //   phone: '',
  //   mobile: '',
  //   website: '',
  //   email: '',
  //   address: '',
  //   extensions: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleInputChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleCkeditorChange = (e, setter) => {
  //   debugger;
  //   setter(e.target.value);
  // };

  const handleInputBlur = (e) => {
    const input = e.target;
    const label = input.parentNode.querySelector('.placeholder-label');

    if (input.value !== '') {
      label.style.top = '10px';
      label.style.fontSize = '12px';
      label.style.color = 'gray';
    } else {
      label.style.top = '50%';
      label.style.fontSize = '';
      label.style.color = 'gray';
    }
  };

  return (
    <>
      <div>
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
          <items
            tab='Templates'
            key='1'
          >
            <p>Content for the first tab</p>
          </items>

          <items
            tab='Details'
            key='2'
          >
            <div className='input-container'>
              <div className='input-wrapper'>
                <Input
                  name='name'
                  className='input'
                  value={name}
                  // value={values.name}
                  onChange={handleNameInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label
                  htmlFor='name-input'
                  className='placeholder-label'
                >
                  Name
                </label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='title'
                  className='input'
                  value={title}
                  onChange={handleTitleInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Title</label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='company'
                  className='input'
                  value={company}
                  onChange={handleComapnyInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Company</label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='phone'
                  className='input'
                  value={phone}
                  onChange={handlePhoneInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Phone</label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='mobile'
                  className='input'
                  value={mobile}
                  onChange={handleMobileInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Mobile</label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='email'
                  className='input'
                  value={email}
                  onChange={handleEmailInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Email</label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='address'
                  className='input'
                  value={address}
                  onChange={handleAddressInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Address</label>
              </div>

              <div className='input-wrapper'>
                <Input
                  name='website'
                  className='input'
                  value={website}
                  onChange={handleWebsiteInputChange}
                  onBlur={handleInputBlur}
                  style={{ marginBottom: 10 }}
                />
                <label className='placeholder-label'>Website</label>
              </div>

              {/* Repeat similar pattern for other input fields... */}
            </div>
          </items>

          <items
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
                    <Button icon={<PlusOutlined />}>
                      Upload Photo or Logo
                    </Button>
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
          </items>

          <items
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
          </items>

          <items
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
            </Select>
            <Divider orientation='left'>Template Color</Divider>
            <Input
              placeholder='Select Color'
              addonAfter={<HighlightOutlined />}
              style={{ marginBottom: 10 }}
            />
            <Divider orientation='left'>Font Scale</Divider>
            <Slider
              min={12}
              max={36}
              defaultValue={fontSize}
              onChange={handleFontSizeChange}
              style={{ marginBottom: 10 }}
            />
            <Divider orientation='left'>Line Spacing</Divider>
            <Slider
              min={0.5}
              max={2}
              step={0.1}
              defaultValue={lineSpacing}
              onChange={handleLineSpacingChange}
              style={{ marginBottom: 10 }}
            />
          </items>
        </Tabs>
      </div>

      <div className='right_tabs intal_div'>
        <div
          data-draft='Draft'
          static-mode='New Message'
          class='preview-pane-wrap static-mode without-branding'
        >
          New Message
        </div>
        <table className='table_1'>
          <tbody>
            <tr>
              <td className='table_data_1'></td>
            </tr>
            <tr>
              <td style={{ margin: '0px' }}>
                <table
                  cellPadding='0'
                  cellSpacing='0'
                  className='table_data_2'
                >
                  <tbody>
                    <tr>
                      <td className='table_data_3'>
                        {/* <img
                    src={`data:image/png;base64,${data['Profile Pic'].value}`}
                    height='65'
                    width='65'
                    alt='photo'
                    style={{
                      width: '65px',
                      verticalAlign: 'middle',
                      borderRadius: '0px',
                      height: '65px'
                    }}
                  /> */}
                      </td>
                      <td
                        valign='top'
                        className='table_data_4'
                      >
                        <table
                          cellPadding='0'
                          cellSpacing='0'
                          className='table_simple'
                        >
                          <tbody>
                            <tr>
                              <td>
                                To: <hr />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Subject: <hr />
                              </td>
                            </tr>
                            <tr>
                              <td className='table_data_5'>
                                <span className='span1'>{name}</span>
                                <br />
                                <span className='span2'>{title},&nbsp;</span>
                                <span className='span3'>{company}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ margin: '0px' }}>
                                <table
                                  cellPadding='0'
                                  cellSpacing='0'
                                  className='table_simple'
                                >
                                  <tbody>
                                    <tr>
                                      <td className='table_data_6'>
                                        <p className='p1'>
                                          <span className='span4'>
                                            <a
                                              href='tel:+923101457770'
                                              rel='nofollow noreferrer'
                                              target='_blank'
                                              className='a1'
                                            >
                                              <span className='span5'>
                                                {phone}
                                              </span>
                                            </a>
                                            &nbsp;&nbsp;|&nbsp;&nbsp;
                                            <span className='span4'>
                                              {mobile}
                                            </span>
                                            <br></br>
                                            {/* <a href={`https://${data['Website'].value}`} rel='nofollow noreferrer' target='_blank' style={{ textDecoration: 'unset' }}> */}
                                            <span className='span5'>
                                              {email}
                                            </span>
                                            &nbsp;&nbsp;|&nbsp;&nbsp;
                                            <span className='span5'>
                                              {website}
                                            </span>
                                            {/* </a> */}
                                          </span>
                                        </p>
                                        <span className='span4'>{address}</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className='table_2'>
                  <tbody>
                    <tr>
                      <td className='table_data_7'></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </>
  );
};

export default Create;
