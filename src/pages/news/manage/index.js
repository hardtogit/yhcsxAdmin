import React, { Component } from 'react';
import {model} from '@/utils/portal';
import {Table,Button} from 'antd';
import ListPage from '@/components/Page/listPage';
import {tableFields,searchFields} from './fields';
import  {SearchFormHook} from '@/components/SearchFormPro/search';
import TableUtils from '@/utils/table';


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
      render: (text, record) => (
        <>
          <a  onClick={()=>{this.props.push('/auditDetail/1');}}>审核</a>
          <a  onClick={()=>{this.props.push('/auditDetail/1');}}>审核</a>
          <a  onClick={()=>{this.props.push('/auditDetail/1');}}>审核</a>
        </>
      )
    }];
    return createColumns(fields).enhance(extraFields).values();
  }
  handleSearch=(values)=>{
    const {fetchList,goPage}=this.props;
    goPage('banners',1);
    this.searchParams=values;
    fetchList(values);

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
      onChange({ current }) {
        goPage('news',current);
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
