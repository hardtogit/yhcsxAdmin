import React, { Component } from 'react';
import { Modal, Form ,Input} from 'antd';
import UploadImg from '@/components/UploadImg';
import Fetch from '@/utils/baseSever';
import { message } from 'antd/lib/index';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6}
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};
@Form.create()
class Index extends Component {
  render() {
    const { onCancel, form: { getFieldDecorator},type,entity,callBack } = this.props;
      console.log(type);
    const modalProps = {
      title: type==='add'?'新增分公司':'修改分公司',
      visible: true,
      onCancel,
      onOk: () => {
          this.props.form.validateFields((error,values)=>{
            if(!error){

              if(type==='add'){
                Fetch({...values,obj :'admin',act: 'joinsubcompanyadd'}).then(()=>{
                  message.success('添加成功');
                  callBack();
                });
              }else{
                Fetch({...values,obj :'admin',act: 'joinsubcompanymodify',id:entity['_id']}).then(()=>{
                  message.success('修改成功');
                  callBack();
                });
              }

            }
          });

      }
    };
    return (
      <Modal {...modalProps} >
        <Form {...formItemLayout}>
          <Form.Item label="名称">
            {getFieldDecorator('name', {

            })(
              <Input/>
            )}
          </Form.Item>
          <Form.Item label="地址">
            {getFieldDecorator('address', {

            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('email', {

            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="电话">
            {getFieldDecorator('phone', {

            })(
              <Input />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Index;
