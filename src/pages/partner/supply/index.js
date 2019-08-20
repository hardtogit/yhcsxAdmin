import React, { Component } from 'react';
import {model} from '@/utils/portal';
import {Table,Button,Divider} from 'antd';
import {tableFields} from './fields';
import TableUtils from '@/utils/table';
import Fetch from '@/utils/baseSever';
import { Modal } from 'antd/lib/index';


const createColumns=TableUtils.createColumns;
@model('supplyManage')
class Index extends Component {
  constructor(props) {
    super(props);
  }
  getInitalColumns(fields) {
    const extraFields = [{
      key: 'operator',
      name: '操作',
      width: 200,
      render: (text, record) => (
        <>
          <a  onClick={()=>{this.props.push( `/partner/supply/edit/${JSON.stringify(record)}`);}}>修改</a>
          <Divider type={'vertical'} />
          <a  onClick={() => {
            Modal.confirm({
                title: '系统提示',
                content: '确定生效？',
                onOk: () => Fetch({ obj: 'admin', act: 'ptrproviderset', status: '生效', id: record['_id'] }).then(() => {
                  this.props.fetchList({
                    obj: 'admin',
                    act: 'ptrproviderlist'

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
                onOk: () => Fetch({ obj: 'admin', act: 'ptrproviderset', status: '失效', id: record['_id'] }).then(() => {
                  this.props.fetchList({
                    obj: 'admin',
                    act: 'ptrproviderlist'
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
                onOk: () => Fetch({ obj: 'admin', act: 'ptrproviderdel', id: record['_id'] }).then(() => {
                  this.props.fetchList({
                    ...this.searchParams, obj: 'admin',
                    act: 'ptrproviderlist'
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
    const {push,supplies,loading,fetchList,goPage}=this.props;
    const tableProps= {
      columns:this.getInitalColumns(tableFields),
      bordered:true,
      rowKey:'_id',
      dataSource: supplies.list,
      loading: loading.supplies,
      pagination:push.pagination,
      onChange:({ current })=> {
        goPage('supplies',current);
        fetchList({obj: 'admin',
          act: 'ptrproviderlist'});
      }
    };

    return (
      <>
        <Button type="primary" style={{marginBottom:'24px'}}
            onClick={()=>{
                  this.props.push('/partner/supply/create');
                }}
        >新增</Button>
        <Table {...tableProps}/>
      </>
    );
  }
}

export default Index;
