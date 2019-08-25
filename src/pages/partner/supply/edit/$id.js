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
      loading:false
    };
  }
  componentDidMount(){
    this.props.form.setFieldsValue(JSON.parse(this.props.match.params.id));
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj:'admin',act:'ptrprovidermodify',id:JSON.parse(this.props.match.params.id)['_id']}).then(()=>{
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
            label="图片"
            extra="图片格式为JPG，图片大小在600KB以内，尺寸为443*332"
        >
          {
            getFieldDecorator('picture',{
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:443,height:332,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
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
            label="详情"
        >
          {
            getFieldDecorator('detail',{
              rules:[
                {required:true,message:'详情必须填写'}
              ]

            })(
              <Input.TextArea autosize={{minRows: 4, maxRows: 6}}/>
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
