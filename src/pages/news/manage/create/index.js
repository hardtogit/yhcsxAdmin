import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {screenType} from '@/config/constants';
import {model} from '@/utils/portal';
import Editor from '@/components/Editor';
import {Form,Select,Input,Button,Col,Row,Radio,DatePicker} from 'antd';
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
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.date=values.date.unix();
        Fetch({...values,obj:'admin',act:'newsmanageadd'}).then(()=>{
          message.success('新增成功');
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
            style={{maxWidth:'800px'}}
        >
          <FormItem
              label="标题"
              extra="字数在32字以内"
          >
            {
              getFieldDecorator('title',{
                rules:[
                  {required:true,message:'标题必须填写'}
                ]

              })(
                <Input maxLength={32}/>
              )
            }
          </FormItem>
          <FormItem
              label="来源"
          >
            {
              getFieldDecorator('source',{
                rules:[
                  {required:true,message:'来源必须填写'}
                ]

              })(
                <Input/>
              )
            }
          </FormItem>
          <FormItem
              label="发布时间"
          >
            {
              getFieldDecorator('date',{
                rules:[
                  {required:true,message:'发布时间必须选择'}
                ]

              })(
                <DatePicker  />
              )
            }
          </FormItem>

          <FormItem
              label="封面图"
              extra="图片格式为JPG，图片大小在600KB以内，尺寸为280*216"
          >
            {
              getFieldDecorator('picture',{
                rules:[
                  {required:true,message:'封面图必须上传'}
                ]

              })(
                <UploadImg imgCropProps={{width:280,height:216,modalWidth:800,useRatio:true}}/>
              )
            }
          </FormItem>
          <FormItem
              label="首页封面图"
              extra="图片格式为JPG，图片大小在600KB以内，尺寸为272*272"
          >
            {
              getFieldDecorator('homepicture',{
                rules:[
                  {required:true,message:'封面图必须上传'}
                ]

              })(
                <UploadImg imgCropProps={{width:272,height:272,modalWidth:800,useRatio:true}}/>
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
              extra="字数在70字以内"
          >
            {
              getFieldDecorator('description',{
                rules:[
                  {required:true,message:'简介必须填写'}
                ]

              })(
                <Input.TextArea autosize={{minRows: 4, maxRows: 6}} maxLength={70}/>
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
                initialValue:'',
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
