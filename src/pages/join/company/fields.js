const searchFields=[{
  key:'name',
  name:'标题'
}];
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
    key: 'movie',
    name: '链接',
    render: (v) => {
      return v.status;
    }
  }
];
export {
  searchFields,
  tableFields
};
