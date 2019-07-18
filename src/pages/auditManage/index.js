import React from 'react';
import {Table} from 'antd';
import TableUtils from '@/utils/table';
import {searchFields,tableFields} from './fields';
import {model} from '@/utils/portal';
import { SearchFormHook } from '@/components/SearchFormPro/search';
const createColumns=TableUtils.createColumns;
@model('auditManage')
class Index extends React.Component{
  componentDidMount(){
   // list().then((data)=>{console.log(data)}).catch((e)=>{
   //   console.log(e)
   // })
  }
  getInitalColumns(fields) {
    const extraFields = [{
      key: 'operator',
      name: '操作',
      width: 200,
      render: (text, record) => (
        <div>
          <a  onClick={()=>{this.props.push(`/auditDetail/${record._id}`);}}>审核</a>
        </div>
      )
    }];
    return createColumns(fields).enhance(extraFields).values();
  }
  handleSearch=()=>{

  }
  render(){
    const {audits,loading,updateState,fetchList}=this.props;
    const searchFormProps = {
      fields: searchFields,
      onSearch: this.handleSearch
    };
    const tableProps = {
      dataSource: audits.list,
      columns:this.getInitalColumns(tableFields),
      bordered:true,
      loading: loading.users,
      rowKey: 'id',
      pagination: {
        ...audits.pagination
      },
      onChange({ current, pageSize }) {
        updateState({
          pagination: {
            current,
            pageSize
          }
        });
        fetchList();
      }
    };
    return (
      <div >
        {/*<div className='searchForm'>*/}
        {/*<SearchFormHook {...searchFormProps}></SearchFormHook>*/}
        {/*</div>*/}
        <Table {...tableProps} />
      </div>
    );
  }
}
export default Index;
