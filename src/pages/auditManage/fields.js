const  tableFields=[
  {
    key: '_id',
    name: '记录标识'
  },
  {
    key:'phone',
    name:'手机号'
  },
  {
    key:'active',
    name:'图片审核状态',
    render:(v)=>{
      return v.status;
    }
  },
  {
    key: 'movie',
    name: '视频审核状态',
    render:(v)=>{
      return v.status;
    }
  },
  {
    key: 'status',
    name: '总状态'
  }
];
export  {
  tableFields
};
