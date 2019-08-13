import React from 'react';
const searchFields=[{
  key:'title',
  name:'标题'
}];
const tableFields = [
  {
    key: 'fid',
    name: '缩略图',
    render:(v)=>{
      return (<img height={40} src={`http://47.92.169.34/cgi-bin/download.pl?fid=${v}&proj=demo8`} alt=""/>);
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
