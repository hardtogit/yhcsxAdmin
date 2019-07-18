import model from '@/utils/baseModel';
import {Modal} from 'antd';
import {routerRedux} from 'dva/router';
import {withLoading} from '@/utils/dva';
import  { login} from './server';
export default model.extend( {
  namespace:'login',
  state: {
    loading:{
      login:false
    }
  },
  subscriptions: {
  },
  effects: {
    * login({payload}, {put, update, call,select}) {
      const response = yield call(withLoading(login, 'login',),payload);
      if (response.ustr != null && response.ustr !== '' && response.uerr !== 'ERR_CONNECTION_EXCEPTION'){
        Modal.warning({title:response.ustr});
      }else{
          yield put(routerRedux.push('/auditManage'));
      }
    }
  },
  reducers:{

  }
});
