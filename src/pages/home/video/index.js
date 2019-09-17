import React, { Component } from 'react';
import {model} from '@/utils/portal';
import {Form,Select,Button,Input} from 'antd';
import Fetch from '@/utils/baseSever';
import { message } from 'antd/lib/index';

const Option=Select.Option;
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
    Fetch({obj:'admin',act:'videoread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({obj:'admin',act:'videomodify',...values}).then(()=>{
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
            label="视频"
        >
          {
            getFieldDecorator('video',{
              initialValue:entity.video,
              rules:[
                {required:true,message:'视频文件名'}
              ]

            })(
              <Input/>
            )
          }
        </FormItem>
        <FormItem
            label="状态"
        >
          {
            getFieldDecorator('status',{
              initialValue:entity.status||'失效',
              rules:[
                {required:true,message:'状态'}
              ]

            })(
              <Select>
                <Option value="生效" >生效</Option>
                <Option value="失效" >失效</Option>
              </Select>
            )
          }
        </FormItem>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={()=>this.handleSubmit()} style={{marginRight:'15px'}}>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Index;
