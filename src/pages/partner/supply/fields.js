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
    name: '详情',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'active',
    name: '状态',
    render: (v) => {
      return v.status;
    }
  }
];
export {
  tableFields
};
