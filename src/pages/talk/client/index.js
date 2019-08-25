import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import ListInfo from '@/components/ListInfo';
import {Form,Select,Input,Button,InputNumber,Col} from 'antd';
import Fetch from '@/utils/baseSever';
import { message } from 'antd/lib/index';

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
    Fetch({obj:'admin',act: 'cptcustomerread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj :'admin',act: 'cptcustomermodify'}).then(()=>{
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
          style={{maxWidth:'1200px'}}
      >
        <FormItem
            label="内容"
        >
          <div className="ant-input listInfo" style={{height:'auto'}}>
          {
            getFieldDecorator('contents',{
              initialValue:entity.contents||[],
              rules:[
                {required:true,message:'内容必须填写'}
              ]

            })(
              <ListInfo limit={10}/>
            )
          }
          </div>
        </FormItem>
        <FormItem
            label="底部信息"
        >
          <div className="ant-input listInfo" style={{height:'auto'}}>
            {
              getFieldDecorator('infomations',{
                initialValue:entity.infomations||[],
                rules:[
                  {required:true,message:'底部信息必须填写'}
                ]

              })(
                <ListInfo limit={10}/>
              )
            }
          </div>
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
