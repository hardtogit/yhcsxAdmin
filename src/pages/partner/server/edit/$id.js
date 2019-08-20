import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {screenType} from '@/config/constants';
import {model} from '@/utils/portal';
import {Form,Select,Input,Button,InputNumber,Col} from 'antd';
import { message } from 'antd/lib/index';
import Fetch from '@/utils/baseSever';

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
class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false,
      entity:{}
    };
  }
  componentDidMount(){
    this.props.form.setFieldsValue(JSON.parse(this.props.match.params.id));
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj:'admin',act:'ptrcustomermodify',id:JSON.parse(this.props.match.params.id)['_id']}).then(()=>{
          message.success('修改成功');
          this.props.pop();
        });
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
            getFieldDecorator('hpicture',{
              rules:[
                {required:true,message:'首页图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:310,height:192,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
        <FormItem
            label="ICON"
        >
          {
            getFieldDecorator('icon',{
              rules:[
                {required:true,message:'ICON必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:190,height:250,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
        <FormItem
            label="选中ICON"
        >
          {
            getFieldDecorator('selicon',{
              rules:[
                {required:true,message:'选中ICON必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:190,height:250,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
        <FormItem
            label="客户名称"
        >
          {
            getFieldDecorator('name',{
              rules:[
                {required:true,message:'客户名称必须填写'}
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
            getFieldDecorator('detail',{
              rules:[
                {required:true,message:'详细描述必须填写'}
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
            getFieldDecorator('bpicture',{
              rules:[
                {required:true,message:'底部图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:1200,height:799,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
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
export default Index;
