import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {screenType} from '@/config/constants';
import {model} from '@/utils/portal';
import {Form,Select,Input,Button} from 'antd';

const Option=Select.Option;
const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
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
      offset:6
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
            style={{maxWidth:'600px'}}
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
          <FormItem label="设备类型">
            {getFieldDecorator('screenType', {
              rules: [
                { required: true, message: '设备类型必须选择' }
              ]
            })(
              <Select >
                {Object.keys(screenType).map((key)=>(
                  <Option value={key} key={key}>{screenType[key]}</Option>))
                }
              </Select>,
            )}
          </FormItem>
          <FormItem label="描述">
            {getFieldDecorator('description', {
              rules: [
                { required: true, message: 'banner描述必须填写' }
              ]
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem label="链接">
            {getFieldDecorator('description', {
              rules: []
            })(
              <Input/>
            )}
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
