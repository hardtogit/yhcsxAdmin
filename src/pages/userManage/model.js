import {pageConfig} from '@/config/default';
import model from '@/utils/baseModel';
import {withLoading} from '@/utils/dva';
import Fetch from '@/utils/baseSever';
export default model.extend( {
  namespace:'auditManage',
  state: {
    audits:pageConfig,
    loading:{
      users:false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/userManage', () => {
        setTimeout(()=>{
          dispatch({type:'fetchList',payload:{
              obj:'admin',
              act:'authlist'
            }});
        },0);

      });
    }
  },

  effects: {
    * fetchList({payload}, {update, call,select}) {
      const pageModel = yield select(({ auditManage }) => auditManage.audits.pagination);
      const listData = yield call(withLoading(Fetch, 'users'),{...payload,totalpage:pageModel.totalpage,presentpage:pageModel.current-1,amount:pageModel.total});
      yield update({ audits: { list: listData.list, pagination: { ...pageModel, total: listData.tc } } });
    }
  },
  reducers:{

  }
});
