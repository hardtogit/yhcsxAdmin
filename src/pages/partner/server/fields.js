const tableFields = [
  {
    key: '_id',
    name: '名称'
  },
  {
    key: 'active',
    name: '底部文案',
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
