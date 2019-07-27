import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {model} from '@/utils/portal';
import {Form,Select,Row,Col,Button} from 'antd';

const Option=Select.Option;
const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset:2
    }
  }
};
@model('homeBanner')
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
            style={{marginTop:'100px'}}
        >
          <Row>
            <Col span={6}>
              <FormItem
                  label="公司概况"
              >
                {
                  getFieldDecorator('pic',{
                    rules:[
                      {required:true,message:'图片必须上传'}
                    ]

                  })(
                    <UploadImg/>
                  )
                }
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                  label="公司荣誉"
              >
                {
                  getFieldDecorator('pic',{
                    rules:[
                      {required:true,message:'图片必须上传'}
                    ]

                  })(
                    <UploadImg/>
                  )
                }
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                  label="发展历程"
              >
                {
                  getFieldDecorator('pic',{
                    rules:[
                      {required:true,message:'图片必须上传'}
                    ]

                  })(
                    <UploadImg/>
                  )
                }
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                  label="愿景使命"
              >
                {
                  getFieldDecorator('pic',{
                    rules:[
                      {required:true,message:'图片必须上传'}
                    ]

                  })(
                    <UploadImg/>
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
