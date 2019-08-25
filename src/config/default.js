export const pageConfig = {
  pagination:{
    showQuickJumper: true,
    showTotal: total => `共${total} 条记录`,
    current: 1,
    total: 0,
    pageSize: 20,
    totalpage:0
  },
  list: []
};
export const staticPathDown='http://www.freshfood.cn/cgi-bin/download.pl?proj=yh_ga&&fid=';
export const staticPathUpload='http://www.freshfood.cn/cgi-bin//upload.pl';
