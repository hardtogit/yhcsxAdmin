import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import ListInfo from '@/components/ListInfo';
import {Form,Select,Button,message} from 'antd';
import Fetch from '@/utils/baseSever';

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
      loading:false,
      entity:{}
    };
  }
  componentDidMount(){
    Fetch({obj:'admin',act:'cpyhonorread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({obj:'admin',act:'cpyhonormodify',...values}).then(()=>{
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
          style={{maxWidth:'1200px'}}
      >
        <FormItem
            label="荣誉记录"
        >
          <div className="ant-input listInfo" style={{height:'auto'}}>
            {
              getFieldDecorator('records',{
                initialValue:entity.description,
                rules:[
                  {required:true,message:'荣誉记录必须填写'}
                ]
              })(
                <ListInfo limit={25}/>
              )
            }
          </div>
        </FormItem>
        <FormItem
            label="图片"
            extra="图片格式为JPG，图片大小在600KB以内,尺寸为369*408"
        >
            {
              getFieldDecorator('honor1',{
                initialValue:entity.honor1,
                rules:[
                  {required:true,message:'图片必须上传'}
                ]

              })(
                <UploadImg imgCropProps={{width:374,height:413,modalWidth:800,useRatio:true}}/>
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
