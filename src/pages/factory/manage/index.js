import React, { Component } from 'react';
import {model} from '@/utils/portal';
import {Table,Divider,Modal} from 'antd';
import ListPage from '@/components/Page/listPage';
import {tableFields,searchFields} from './fields';
import  {SearchFormHook} from '@/components/SearchFormPro/search';
import TableUtils from '@/utils/table';
import Fetch from '@/utils/baseSever';


const createColumns=TableUtils.createColumns;
@model('factoryManage')
class Index extends Component {
  constructor(props) {
    super(props);
    this.searchParams={};
  }
  getInitalColumns(fields) {
    const extraFields = [{
      key: 'operator',
      name: '操作',
      width: 200,
      render: (text, row) => (
        <>
          <a  onClick={()=>{
            Modal.confirm({
                title: '系统提示',
                content: '确定生效？',
                onOk: () => Fetch({ obj: 'admin', act: 'ftymanageset', status: '失效', id: row['_id'] }).then(() => {
                  this.props.fetchList({
                    ...this.searchParams, obj: 'admin',
                    act: 'ftymanagelist'
                  });
                })
              }
            );

          }}
          >失效</a>
          <Divider type="vertical" />
          <a  onClick={()=>{
            Modal.confirm({
                title: '系统提示',
                content: '确定生效？',
                onOk: () => Fetch({ obj: 'admin', act: 'ftymanageset', status: '生效', id: row['_id'] }).then(() => {
                  this.props.fetchList({
                    ...this.searchParams, obj: 'admin',
                    act: 'ftymanagelist'
                  });
                })
              }
            );
          }}
          >生效</a>
          <Divider type="vertical" />
          <a  onClick={()=>{this.props.push('/factory/manage/edit/1');}}>修改</a>
          <Divider type="vertical" />
          <a  onClick={()=>{
            Modal.confirm({
                title: '系统提示',
                content: '确定生效？',
                onOk: () => Fetch({ obj: 'admin', act: 'ftymanagedel', status: '生效', id: row['_id'] }).then(() => {
                  this.props.fetchList({
                    ...this.searchParams, obj: 'admin',
                    act: 'ftymanagelist'
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
  handleSearch=(values)=>{
    const {fetchList,goPage}=this.props;
    goPage('factory',1);
    this.searchParams=values;
    fetchList({...values, obj: 'admin',
      act: 'ftymanagelist'});
  }
  render() {
    const {push,factory,loading,fetchList,goPage}=this.props;
    const searchProps={
      fields:searchFields,
      onSearch:this.handleSearch,
      btns:[{source:'add',title:'新增'}],
      handler:(source)=>{
        if(source==='add'){
          push('/factory/manage/create');
        }
      }
    };
    const tableProps= {
      columns:this.getInitalColumns(tableFields),
      bordered:true,
      dataSource: factory.list,
      loading: loading.factory,
      pagination:push.pagination,
      onChange({ current }) {
        goPage('factory',current);
        fetchList(this.searchParams);
      }
    };

    return (
      <ListPage
          searchBar={<SearchFormHook {...searchProps}/>}
          table={<Table {...tableProps}/>}
      />
    );
  }
}

export default Index;
