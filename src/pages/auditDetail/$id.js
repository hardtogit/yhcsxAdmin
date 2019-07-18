import React from 'react';
import {Card,Button,Select,Form,Col,Row,Modal} from 'antd';
import {model} from '../../utils/portal';
import {staticPath} from '@/config/default';
import styles from './index.less';
const FormItem=Form.Item;
const Option=Select.Option;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};
@model('auditDetail')
@Form.create()
class Index extends React.Component{
  constructor(){
    super();
    this.state={

    };
  }
  audit=(type)=>{
    const {form,handleAudit,audit}=this.props;
    form.validateFields((error,values)=>{
      if(!error){
        handleAudit({
          obj:'admin',
          act:'authcheck',
          id:audit._id,
          type,
          status:values[type]
        }).then((data)=>{
          console.log(data);
          Modal.warn({title:data.ustr});
        });
      }
    });
  }
  render(){
    const {form:{getFieldDecorator},audit}=this.props;
    return(
      <div className="auditDetail">
        {audit.active&&   <Form {...formItemLayout}>
          <Card title="图片" size="small">
            <div className={styles.title}>自拍</div>
            <div className={styles.imgs}>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture1_1} alt=""/>
              </div>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture1_2} alt=""/>
              </div>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture1_3} alt=""/>
              </div>
            </div>
            <div className={styles.title}>旅游照</div>
            <div className={styles.imgs}>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture2_1} alt=""/>
              </div>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture2_2} alt=""/>
              </div>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture2_3} alt=""/>
              </div>

            </div>
            <div className={styles.title}>全身照</div>
            <div className={styles.imgs}>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture3_1} alt=""/>
              </div>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture3_2} alt=""/>
              </div>
              <div className={styles.img}>
                <img src={staticPath+audit.active.picture3_3} alt=""/>
              </div>
            </div>
            <Row style={{marginTop:'30px'}}>
              <Col span={8}>
                <FormItem
                    label="审核状态"
                >{
                  getFieldDecorator('active', {
                    initialValue:'审核成功'
                  })(
                    <Select>
                      <Option value="审核未通过">审核未通过</Option>
                      <Option value="等待未审核">等待未审核</Option>
                      <Option value="审核成功">审核成功</Option>
                      <Option value="审核拒绝">审核拒绝</Option>
                    </Select>
                  )
                }
                </FormItem>
              </Col>
            </Row>
            <div >
              <Button style={{marginRight:'20px'}} type="primary" onClick={()=>{this.audit('active');}}>提交</Button>
            </div>
          </Card>
          <Card title="视频" size={'small'} style={{marginTop:'20px'}}>
            <video width="800px" height="480px" src={staticPath+audit.movie.radio} controls/>
            <Row style={{marginTop:'30px'}}>
              <Col span={8}>
                <FormItem
                    label="审核状态"
                >{
                  getFieldDecorator('movie', {
                    initialValue:'审核成功'
                  })(
                    <Select>
                      <Option value="审核未通过">审核未通过</Option>
                      <Option value="等待未审核">等待未审核</Option>
                      <Option value="审核成功">审核成功</Option>
                      <Option value="审核拒绝">审核拒绝</Option>
                    </Select>
                  )
                }
                </FormItem>
              </Col>
            </Row>
            <div>
              <Button style={{marginRight:'20px'}} type="primary" onClick={()=>{this.audit('movie');}}>提交</Button>
            </div>
          </Card>

          <Button style={{margin:'20px 0'}} onClick={this.props.pop}>返回</Button>
        </Form>}

      </div>
    );
  }
}
export default Index;
