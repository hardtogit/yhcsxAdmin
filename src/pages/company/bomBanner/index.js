import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import {model} from '@/utils/portal';
import {Form,Button,message} from 'antd';
import Fetch from '@/utils/baseSever';

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
      loading:false,
      entity:{}
    };
  }
  componentDidMount(){
    Fetch({obj:'admin',act:'cpybannerread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({obj:'admin',act:'cpybannermodify',...values}).then(()=>{
          message.success('操作成功');
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
          style={{marginTop:'100px',maxWidth:'600px'}}
      >
        <FormItem
            label="图片"
            extra="图片格式为JPG，图片大小在600KB以内,尺寸为1920*540"
        >
          {
            getFieldDecorator('banner1',{
              initialValue:entity.banner1,
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:1920,height:540,modalWidth:800,useRatio:true}}/>
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
