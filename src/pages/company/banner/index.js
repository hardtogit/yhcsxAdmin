import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
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
@Form.create()
class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false,
      banner:{}
    }
    ;
  }
  componentDidMount(){
    Fetch({obj:'admin',act: 'bannerlist',type:'company',location:'pc' }).then((response)=>{
        this.setState({
          banner:response.info[0]||{}
        });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj :'admin',act: 'banneradd',type:'company',location:'pc' }).then((response)=>{
          this.setState({
            banner:response.info[0]||{}
          });
        }).then(()=>{
          message.success('设置成功');
        });
      }
    });
  };
  render() {
    const {banner}=this.state;
    const { form:{getFieldDecorator} }=this.props;
    return (
      <Form
          {...formItemLayout}
          style={{marginTop:'100px',maxWidth:'600px'}}
      >
        <FormItem
            label="图片"
        >
          {
            getFieldDecorator('picture',{
              initialValue:banner.fid,
              rules:[
                {required:true,message:'图片必须上传'}
              ]

            })(
              <UploadImg imgCropProps={{width:1920,height:480,modalWidth:800,useRatio:true}}/>
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
