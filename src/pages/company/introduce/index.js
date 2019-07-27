import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {model} from '@/utils/portal';
import {Form,Input,Button} from 'antd';

const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 2 },
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
          style={{marginTop:'100px',maxWidth:'1200px'}}
      >
        <FormItem
            label="图片"
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
            label="企业介绍"
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
