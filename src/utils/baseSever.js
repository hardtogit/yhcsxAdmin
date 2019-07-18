import { Promise } from 'es6-promise';

export default (params)=>{
  return new Promise((resolve)=>{
    if (window.callBackFn[params.obj + '_' + params.act]) {
      window.callBackFn[params.obj + '_' + params.act].push((response)=>{
        resolve(response);
      });
    } else {
      window.callBackFn[params.obj + '_' + params.act] = [(response)=>{
        resolve(response);
      }];
    }
    window.apiconn.send_obj(params);
  });
};
