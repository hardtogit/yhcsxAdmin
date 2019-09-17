import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {model} from '@/utils/portal';
import {Form,Select,Row,Col,Button,Input} from 'antd';
import Fetch from '@/utils/baseSever';
import { message } from 'antd/lib/index';

const Option=Select.Option;
const FormItem=Form.Item;
const formItemLayout = {
  labelCol: { span: 8 },
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
      loading:false,
      entity:{}
    };
  }
  componentDidMount(){
    Fetch({obj:'admin',act: 'joinheaderread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj :'admin',act: 'joinheadermodify'}).then(()=>{
          message.success('设置成功');
        });
      }
    });
  };
  render() {
    const {entity}=this.state;
    const { form:{getFieldDecorator},pop }=this.props;
    return (
        <Form
            {...formItemLayout}
            style={{marginTop:'100px'}}
        >
          <Row>
            <Col span={6}>
              <FormItem
                  label="左图"
                  extra="图片格式为JPG，图片大小在600KB以内，尺寸为598*371"
              >
                {
                  getFieldDecorator('des1',{
                    initialValue:entity.des1,
                    rules:[
                      {required:true,message:'图片必须上传'}
                    ]

                  })(
                    <UploadImg imgCropProps={{width:598,height:371,modalWidth:800,useRatio:true}}/>
                  )
                }
              </FormItem>
              <FormItem
                  label="链接"
              >
                {
                  getFieldDecorator('leftUrl',{
                    initialValue:entity.leftUrl,
                    rules:[
                      {required:true,message:'链接必须填写'}
                    ]

                  })(
                    <Input />
                  )
                }
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                  label="右图"
                  extra="图片格式为JPG，图片大小在600KB以内，尺寸为598*371"
              >
                {
                  getFieldDecorator('des2',{
                    initialValue:entity.des2,
                    rules:[
                      {required:true,message:'图片必须上传'}
                    ]

                  })(
                    <UploadImg imgCropProps={{width:598,height:371,modalWidth:800,useRatio:true}}/>
                  )
                }
              </FormItem>
              <FormItem
                  label="链接"
              >
                {
                  getFieldDecorator('rightUrl',{
                    initialValue:entity.rightUrl,
                    rules:[
                      {required:true,message:'链接必须填写'}
                    ]

                  })(
                    <Input />
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
