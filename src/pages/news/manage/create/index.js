import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {screenType} from '@/config/constants';
import {model} from '@/utils/portal';
import Editor from '@/components/Editor';
import {Form,Select,Input,Button,InputNumber,Col,Row,Radio} from 'antd';

const Option=Select.Option;
const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};
const picFormItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 12 }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset:6
    }
  }
};
// @model('homeBanner')
@Form.create()
class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { form:{getFieldDecorator},pop }=this.props;
    return (
        <Form
            {...formItemLayout}
            style={{maxWidth:'800px'}}
        >
          <FormItem
              label="标题"
          >
            {
              getFieldDecorator('title',{
                rules:[
                  {required:true,message:'标题必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="封面图"
          >
            {
              getFieldDecorator('picture',{
                rules:[
                  {required:true,message:'封面图必须上传'}
                ]

              })(
                <UploadImg/>
              )
            }
          </FormItem>
          <FormItem
              label="是否是首页新闻"
          >
            {
              getFieldDecorator('home',{
                rules:[
                  {required:true,message:'是否是首页新闻必须选择'}
                ]

              })(
                <Radio.Group>
                  <Radio value="是">是</Radio>
                  <Radio value="否">否</Radio>
                </Radio.Group>
              )
            }
          </FormItem>
          <FormItem
              label="简介"
          >
            {
              getFieldDecorator('description',{
                rules:[
                  {required:true,message:'简介必须填写'}
                ]

              })(
                <Input.TextArea autosize={{minRows: 4, maxRows: 6}}/>
              )
            }
          </FormItem>
          <Row>
          <Col span={24}>
          <FormItem
              label="新闻详情"
              {...formItemLayout}
          >
            {
              getFieldDecorator('detail',{
                rules:[
                  {required:true,message:'新闻详情必须填写'}
                ]

              })(
                <Editor style={{width:'100%'}}/>
              )
            }
          </FormItem>
          </Col>
          </Row>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{marginRight:'15px'}}>
              保存
            </Button>
            <Button onClick={()=>pop()}>
              返回
            </Button>
          </Form.Item>
        </Form>
    );
  }
}
export default Index;
