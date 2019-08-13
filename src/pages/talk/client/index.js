import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import ListInfo from '@/components/ListInfo';
import {Form,Select,Input,Button,InputNumber,Col} from 'antd';

const Option=Select.Option;
const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 2 },
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
      offset:2
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
          style={{maxWidth:'1200px'}}
      >
        <FormItem
            label="内容"
        >
          <div className="ant-input listInfo" style={{height:'auto'}}>
          {
            getFieldDecorator('pic',{
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <ListInfo/>
            )
          }
          </div>
        </FormItem>
        <FormItem
            label="底部信息"
        >
          <div className="ant-input listInfo" style={{height:'auto'}}>
            {
              getFieldDecorator('pic',{
                rules:[
                  {required:true,message:'图片必须上传'}
                ]

              })(
                <ListInfo/>
              )
            }
          </div>
        </FormItem>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{marginRight:'15px'}}>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Index;
