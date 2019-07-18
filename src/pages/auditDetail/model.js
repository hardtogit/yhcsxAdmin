import model from '@/utils/baseModel';
import {withLoading} from '@/utils/dva';
import Fetch from '@/utils/baseSever';
export default model.extend( {
  namespace:'auditDetail',
  state: {
    audit:{},
    loading:{
      users:false,
      detail:false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/auditDetail/:id', ({params}) => {
        dispatch({type:'initData'});
        setTimeout(()=>{
          dispatch({type:'getDetail',payload:{
              obj:'admin',
              act:'authdetail',
              id:params.id
            }});
        },300);

      });
    }
  },

  effects: {
    *initData(action,{update}){
      yield update({
        audit:{},
        loading:{
          users:false,
          detail:false
        }
      });
    },
    * getDetail({payload}, {update, call}) {
      const response = yield call(withLoading(Fetch, 'detail'),payload);
      yield update({audit:response.info});
    },
    * handleAudit({payload},{call}){
      const response =yield call(withLoading(Fetch, 'users'),payload);
      return response;
    }
  },
  reducers:{

  }
});
