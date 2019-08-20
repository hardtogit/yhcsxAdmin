const tableFields = [
  {
    key: 'picture',
    name: '缩略图',
    render:(v)=>{
      return (<img height={40} src={`http://www.freshfood.cn/cgi-bin/download.pl?fid=${v}&proj=yh_ga`} alt=""/>);
    }
  },
  {
    key: 'title',
    name: '标题'

  },
  {
    key: 'detail',
    name: '详情'

  },
  {
    key: 'status',
    name: '状态'

  }
];
export {
  tableFields
};
