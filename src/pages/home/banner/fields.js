const searchFields=[
  {
    key: 'movie',
    name: '设备类型',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'status',
    name: '状态'
  }
];
const tableFields = [
  {
    key: '_id',
    name: '缩略图'
  },
  {
    key: 'active',
    name: '链接',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'movie',
    name: '设备类型',
    render: (v) => {
      return v.status;
    }
  },
  {
    key: 'status',
    name: '描述'
  },
  {
    key: '状态',
    name: '状态'
  }
];
export {
  tableFields,
  searchFields
};
