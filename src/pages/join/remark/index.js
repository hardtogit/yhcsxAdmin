import React, { Component } from 'react';
import UploadImg from '@/components/UploadImg';
import ListInfo from '@/components/ListInfo';
import {model} from '@/utils/portal';
import {Form,Row,Col,Button,Input} from 'antd';
import Fetch from '@/utils/baseSever';
import { message } from 'antd/lib/index';


const FormItem=Form.Item;
// const formItemLayout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 14 }
// };
const formItemLayout = {
  labelCol: { span: 2 },
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
    Fetch({obj:'admin',act: 'titleread'}).then((response)=>{
      this.setState({
        entity:response.info
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Fetch({...values,obj :'admin',act: 'titlemodify'}).then(()=>{
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
            style={{marginTop:'100px',maxWidth:'1200px'}}
        >
          <Row>
            <Col span={24}>
              <FormItem
                  label="标题"
              >
                {
                  getFieldDecorator('title',{
                    initialValue:entity.title,
                    rules:[
                      {required:true,message:'标题必须填写'}
                    ]

                  })(
                    <Input />
                  )
                }
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <FormItem
                  label="内容"
              >
                <div className="ant-input listInfo" style={{height:'auto'}}>
                {
                  getFieldDecorator('content',{
                    initialValue:entity.content,
                    rules:[
                      {required:true,message:''}
                    ]

                  })(
                    <ListInfo />
                  )
                }
                </div>
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
