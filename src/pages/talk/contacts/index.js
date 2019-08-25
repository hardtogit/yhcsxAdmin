import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {Form,Select,Input,Button} from 'antd';
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
// @model('homeBanner')
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
    Fetch({obj:'admin',act: 'cptcontactread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj :'admin',act: 'cptcontactmodify'}).then(()=>{
          message.success('设置成功');
        });
      }
    });
  };
  render() {
    const {entity}=this.state;
    const { form:{getFieldDecorator}}=this.props;
    return (
        <Form
            {...formItemLayout}
            style={{maxWidth:'600px'}}
        >
          <FormItem
              label="图片"
              extra="图片格式为PNG（背景透明），图片大小在600KB以内，尺寸为1094*561"
          >
            {
              getFieldDecorator('picture',{
                initialValue:entity.picture,
                rules:[
                  {required:true,message:'图片必须上传'}
                ]

              })(
                <UploadImg imgCropProps={{width:1094,height:561,modalWidth:800,useRatio:true}}/>
              )
            }
          </FormItem>
          <FormItem
              label="公司标题"
          >
            {
              getFieldDecorator('title',{
                initialValue:entity.title,
                rules:[
                  {required:true,message:'公司标题必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="详细地址"
          >
            {
              getFieldDecorator('address',{
                initialValue:entity.address,
                rules:[
                  {required:true,message:'详细地址必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="经度"
              extra={<div>经纬度查询网站：<a href="http://api.map.baidu.com/lbsapi/getpoint/index.html" target="_blank">http://api.map.baidu.com/lbsapi/getpoint/index.html</a> </div>}

          >
            {
              getFieldDecorator('longitude',{
                initialValue:entity.longitude,
                rules:[
                  {required:true,message:'经度'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="纬度"
          >
            {
              getFieldDecorator('latitude',{
                initialValue:entity.latitude,
                rules:[
                  {required:true,message:'纬度'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" onClick={this.handleSubmit} style={{marginRight:'15px'}}>
              保存
            </Button>
          </Form.Item>
        </Form>
    );
  }
}
export default Index;
