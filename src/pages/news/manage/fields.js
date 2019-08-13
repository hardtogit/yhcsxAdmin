const colLayout={
  xxl:{span:6},
  xl:{span:8},
  xs:{span:8}
};
const searchFields=[
  {
    key: 'name',
    name: '标题',
    render: (v) => {
      return v.status;
    },
    ColLayout:colLayout
  },
  {
    key: 'status',
    name: '发布时间',
    type:'dateRange',
    ColLayout:colLayout
  },
  {
    key: 'status',
    name: '状态',
    type:'enum',
    enums:{
      1:'生效',
      2:'失效'
    },
    ColLayout:colLayout
  },
  {
    key: 'status',
    name: '是否放置到首页',
    type:'enum',
    enums:{
      1:'是',
      2:'否'
    },
    ColLayout:colLayout
  }
];
const tableFields = [
  {
    key: '_id',
    name: '缩略图'
  },
  {
    key: 'active',
    name: '标题',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'active',
    name: '简介',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'movie',
    name: '发布时间',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'movie',
    name: '首页新闻（4条）',
    render: (v) => {
      return v.status;
    }
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
