import React, { Component } from 'react';
import {model} from '@/utils/portal';
import {Table,Modal,Divider,message} from 'antd';
import ListPage from '@/components/Page/listPage';
import {tableFields,searchFields} from './fields';
import  {SearchFormHook} from '@/components/SearchFormPro/search';
import TableUtils from '@/utils/table';
import Fetch from '@/utils/baseSever';


const createColumns=TableUtils.createColumns;
@model('newsManage')
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
      render: (v, row) => (
        <>
          <a onClick={() => {
            Modal.confirm({
                title: '系统提示',
                content: '确定生效？',
                onOk: () => Fetch({ obj: 'admin', act: 'newsmanageset', status: '生效', id: row['_id'] }).then(() => {
                  this.props.fetchList({
                    ...this.searchParams, obj: 'admin',
                    act: 'newsmanagelist',
                    type: 'home'
                  });
                })
              }
            );
          }}
          >生效</a>
          <Divider type="vertical"/>
          <a onClick={() => {
            Modal.confirm({
              title: '系统提示',
              content: '确定失效？',
              onOk: () => Fetch({ obj: 'admin', act: 'newsmanageset', status: '失效', id: row['_id'] }).then(() => {
                this.props.fetchList({
                  ...this.searchParams, obj: 'admin',
                  act: 'newsmanagelist',
                  type: 'home'
                });
              })
            });
          }}
          >失效</a>
          <Divider type="vertical"/>
          <a onClick={() => {
            this.props.push(`/news/manage/edit/${row['_id']}`);
          }}
          >修改</a>
          <Divider type="vertical"/>
          <a onClick={() => {
            Modal.confirm({
              title: '系统提示',
              content: '确认删除？',
              onOk: () => Fetch({ obj: 'admin', act: 'newsmanagedel', id: row['_id'] }).then(() => {
                message.success('删除成功');
                this.props.fetchList({
                  ...this.searchParams, obj: 'admin',
                  act: 'newsmanagelist',
                  type: 'home'
                });
              })
            });
          }}
          >删除</a>
        </>
      )
    }];
    return createColumns(fields).enhance(extraFields).values();
  }
  handleSearch=(values)=>{
    const {fetchList,goPage}=this.props;
    goPage('news',1);
    if(values.date){
      values.starttime=values.date[0];
      values.endtime=values.date[1];
      delete values.date;
    }
    this.searchParams=values;
    fetchList({...values,obj:'admin',act:'newsmanagelist'});

  }
  render() {
    const {push,news,loading,fetchList,goPage}=this.props;
    const searchProps={
      fields:searchFields,
      onSearch:this.handleSearch,
      btns:[{source:'add',title:'新增'}],
      handler:(source)=>{
        if(source==='add'){
          push('/news/manage/create');
        }
      }
    };
    const tableProps= {
      columns:this.getInitalColumns(tableFields),
      bordered:true,
      dataSource: news.list,
      loading: loading.factory,
      pagination:push.pagination,
      onChange:({ current })=> {
        goPage('news',current);
        fetchList({...this.searchParams,obj:'admin',act:'newsmanagelist'});
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
