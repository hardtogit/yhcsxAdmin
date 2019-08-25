import React from 'react';
import {staticPathDown} from '@/config/default';
const searchFields=[{
  key:'title',
  name:'标题'
}];
const tableFields = [
  {
    key: 'fid',
    name: '缩略图',
    render:(v)=>{
      return (<img height={40} src={staticPathDown+v} alt=""/>);
    }
  },
  {
    key: 'title',
    name: '标题'
  },
  {
    key: 'link',
    name: '链接'
  }
];
export {
  searchFields,
  tableFields
};
