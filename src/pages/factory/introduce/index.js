import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {model} from '@/utils/portal';
import {Form,Input,Button,Col,message,Row} from 'antd';
import Fetch from '@/utils/baseSever';

const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 14 }
};
const picFormItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
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
      loading:false,
      entity:{}
    };
  }
  componentDidMount(){
    Fetch({obj:'admin',act: 'ftydescriptionread',type:'factory'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({obj:'admin',act: 'ftydescriptionmodify',type:'factory',...values}).then(()=>{
          message.success('操作成功');
        });
      }
    });
  };
  render() {
    const {entity}=this.state;
    const { form:{getFieldDecorator} }=this.props;
    return (
      <Form
          {...formItemLayout}
          style={{marginTop:'100px',maxWidth:'1200px'}}
      >
        <FormItem
            label="工厂总介绍"
        >
          {
            getFieldDecorator('description',{
              initialValue:entity.description,
              rules:[
                {required:true,message:'企业介绍必须填写'}
              ]

            })(
              <Input.TextArea autosize={{minRows: 4, maxRows: 6}}/>
            )
          }
        </FormItem>
        <Row>
        <Col span={8}>
        <FormItem
            label="图片"
            {...picFormItemLayout}
        >
          {
            getFieldDecorator('des1',{
              initialValue:entity.des1,
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:390,height:280,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
        </Col>
        <Col span={8}>
        <FormItem
            label="图片"
            {...picFormItemLayout}
        >
          {
            getFieldDecorator('des2',{
              initialValue:entity.des2,
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:390,height:280,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
        </Col>
        <Col span={8}>
        <FormItem
            {...picFormItemLayout}
            label="图片"
        >
          {
            getFieldDecorator('des3',{
              initialValue:entity.des3,
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <UploadImg  imgCropProps={{width:390,height:280,modalWidth:800,useRatio:true}}/>
            )
          }
        </FormItem>
        </Col>
        </Row>

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
