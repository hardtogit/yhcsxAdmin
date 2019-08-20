import React, { Component } from 'react';
import {model} from '@/utils/portal';
import {Table,Button,Divider,Modal} from 'antd';
import {tableFields} from './fields';
import TableUtils from '@/utils/table';
import Fetch from '@/utils/baseSever';
import AddModal from './components/addModel';



const createColumns=TableUtils.createColumns;
@model('companyManage')
class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible:false,
      type:'add',
      entity:{}
    };
  }
  getInitalColumns(fields) {
    const extraFields = [{
      key: 'operator',
      name: '操作',
      width: 200,
      render: (text, record) => (
        <>
          <a  onClick={()=>{
            this.setState({
              visible:true,
              type:'edit',
              entity:record
            });
          }}
          >修改</a>
          <Divider type={'vertical'} />
          <a  onClick={() => {
            Modal.confirm({
                title: '系统提示',
                content: '确定生效？',
                onOk: () => Fetch({ obj: 'admin', act: 'joinsubcompanyset', status: '生效', id: record['_id'] }).then(() => {
                  this.props.fetchList({
                    obj: 'admin',
                    act: 'joinsubcompanylist'

                  });
                })
              }
            );
          }}
          >生效</a>
          <Divider type={'vertical'} />
          <a  onClick={() => {
            Modal.confirm({
                title: '系统提示',
                content: '确定失效？',
                onOk: () => Fetch({ obj: 'admin', act: 'joinsubcompanyset', status: '失效', id: record['_id'] }).then(() => {
                  this.props.fetchList({
                    obj: 'admin',
                    act: 'joinsubcompanylist'
                  });
                })
              }
            );
          }}
          >失效</a>
          <Divider type={'vertical'} />
          <a  onClick={() => {
            Modal.confirm({
                title: '系统提示',
                content: '确定删除？',
                onOk: () => Fetch({ obj: 'admin', act: 'joinsubcompanydel', id: record['_id'] }).then(() => {
                  this.props.fetchList({
                    ...this.searchParams, obj: 'admin',
                    act: 'joinsubcompanylist'
                  });
                })
              }
            );
          }}
          >删除</a>
        </>
      )
    }];
    return createColumns(fields).enhance(extraFields).values();
  }
  render() {
    const {visible,type,entity}=this.state;
    const {push,companies,loading,fetchList,goPage}=this.props;
    const tableProps= {
      columns:this.getInitalColumns(tableFields),
      bordered:true,
      dataSource: companies.list,
      loading: loading.companies,
      pagination:push.pagination,
      onChange:({ current })=>{
        goPage('companies',current);
        fetchList({obj: 'admin',
          act: 'joinsubcompanylist'});
      }
    };
    const addModalProps={
      onCancel:()=>{
        this.setState({
          visible:false
        });
      },
      type,
      entity,
      callBack:()=>{
        this.setState({
          visible:false
        });
        fetchList({obj: 'admin',
          act: 'joinsubcompanylist'});
      }
    };

    return (
      <>
        <Button type="primary" style={{marginBottom:'24px'}}
            onClick={()=>{
              this.setState({
                visible:true,
                type:'add',
                entity:{}
              });
            }}
        >新增</Button>
        <Table {...tableProps}/>
        {visible&&<AddModal {...addModalProps}/>}
      </>
    );
  }
}

export default Index;
