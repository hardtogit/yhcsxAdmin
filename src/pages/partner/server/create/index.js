import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {screenType} from '@/config/constants';
import {model} from '@/utils/portal';
import {Form,Select,Input,Button,InputNumber,Col} from 'antd';

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
            style={{maxWidth:'600px'}}
        >
          <FormItem
              label="首页图片"
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
          <FormItem
              label="ICON"
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
          <FormItem
              label="客户名称"
          >
            {
              getFieldDecorator('pic',{
                rules:[
                  {required:true,message:'企业介绍必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="详细描述"
          >
            {
              getFieldDecorator('pic',{
                rules:[
                  {required:true,message:'企业介绍必须填写'}
                ]

              })(
                <Input.TextArea autosize={{minRows: 4, maxRows: 6}}/>
              )
            }
          </FormItem>
          <FormItem
              label="底部图片"
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