import React, { Component } from 'react';
import { Modal, Form ,Input} from 'antd';
import UploadImg from '@/components/UploadImg';

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
    const { onCancel, form: { getFieldDecorator } } = this.props;
    const modalProps = {
      title: '新增分公司',
      visible: true,
      onCancel,
      onOk: () => {

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
            {getFieldDecorator('lianjie', {

            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('lianjie', {

            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="电话">
            {getFieldDecorator('lianjie', {

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
