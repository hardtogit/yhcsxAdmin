import React from 'react';
import { staticPathDown } from '@/config/default';
const colLayout={
  xxl:{span:6},
  xl:{span:8},
  xs:{span:8}
};
const searchFields=[
  {
    key: 'title',
    name: '标题',
    ColLayout:colLayout
  },
  {
    key: 'date',
    name: '发布时间',
    type:'dateRange',
    ColLayout:colLayout
  },
  {
    key: 'status',
    name: '状态',
    type:'enum',
    enums:{
      生效:'生效',
      失效:'失效'
    },
    ColLayout:colLayout
  },
  {
    key: 'home',
    name: '是否放置到首页',
    type:'enum',
    enums:{
      是:'是',
      否:'否'
    },
    ColLayout:colLayout
  }
];
const tableFields = [
  {
    key: 'picture',
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
    key: 'description',
    name: '简介'
  },
  {
    key: 'home',
    name: '首页新闻（4条）'
  },
  {
    key: 'status',
    name: '状态'
  }
];
export {
  tableFields,
  searchFields
};
