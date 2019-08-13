import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {screenType} from '@/config/constants';
import {model} from '@/utils/portal';
import {Form,Select,Input,Button,InputNumber,Col,Row} from 'antd';
import Fetch from '@/utils/baseSever';
import { message } from 'antd/lib/index';

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
@model('baseModel')
@Form.create()
class Id extends Component {
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
        Fetch({...values,obj:'admin',act:'ftymanageadd'}).then(()=>{
          message.success('新增成功');
          this.props.pop();
        });
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
              label="名称"
          >
            {
              getFieldDecorator('name',{
                rules:[
                  {required:true,message:'工厂名称必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="标题图片"
          >
            {
              getFieldDecorator('title',{
                rules:[
                  {required:true,message:'标题图片必须上传'}
                ]

              })(
                <UploadImg/>
              )
            }
          </FormItem>
          <FormItem
              label="工厂介绍"
          >
            {
              getFieldDecorator('description',{
                rules:[
                  {required:true,message:'工厂介绍必须填写'}
                ]

              })(
                <Input.TextArea autosize={{minRows: 4, maxRows: 6}}/>
              )
            }
          </FormItem>
          <FormItem
              label="地址"
          >
            {
              getFieldDecorator('address',{
                rules:[
                  {required:true,message:'地址必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <Row>
          <Col span={12}>
          <FormItem
              label="经度"
              {...picFormItemLayout}
          >
            {
              getFieldDecorator('longitude',{
                rules:[
                  {required:true,message:'经度必须填写'}
                ]

              })(
                <InputNumber />
              )
            }
          </FormItem>
          </Col>
          <Col span={12}>
          <FormItem
              label="纬度"
              {...picFormItemLayout}
          >
            {
              getFieldDecorator('latitude',{
                rules:[
                  {required:true,message:'纬度必须填写'}
                ]

              })(
                <InputNumber />
              )
            }
          </FormItem>
          </Col>
          </Row>
          <FormItem label="中间图">
            {getFieldDecorator('middle', {
              rules: [
                { required: true, message: '中间图必须上传' }
              ]
            })(
              <UploadImg/>
            )}
          </FormItem>
          <Row>
          <Col span={12}>
            <FormItem label="底图左" {...picFormItemLayout}>
              {getFieldDecorator('left', {
                rules: [
                  { required: true, message: '底图左必须上传' }
                ]
              })(
                <UploadImg/>
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="底图右" {...picFormItemLayout}>
              {getFieldDecorator('right', {
                rules: [
                  { required: true, message: '底图又必须上传' }
                ]
              })(
                <UploadImg/>
              )}
            </FormItem>
          </Col>
          </Row>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" onClick={this.handleSubmit} style={{marginRight:'15px'}}>
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
export default Id;
