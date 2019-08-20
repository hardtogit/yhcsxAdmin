const searchFields=[
  {
    key: 'name',
    name: '工厂名称'
  },
  {
    key: 'status',
    name: '状态',
    type:'enum',
    enums:{
      生效:'生效',
      失效:'失效'
    }
  }
];
const tableFields = [
  {
    key: 'name',
    name: '工厂名称'
  },
  {
    key: 'address',
    name: '工厂地址'
  },
  {
    key: 'description',
    name: '工厂介绍'
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
