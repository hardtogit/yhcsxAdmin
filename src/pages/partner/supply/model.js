import { pageConfig } from '@/config/default';
import model from '@/utils/baseModel';
import { withLoading } from '@/utils/dva';
import Fetch from '@/utils/baseSever';

export default model.extend({
  namespace: 'supplyManage',
  state: {
    supplies: pageConfig,
    loading: {
      supplies: false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/partner/supply', () => {
        dispatch({
          type: 'fetchList', payload: {
            obj: 'admin',
            act: 'ptrproviderlist'
          }
        });
      });
    }
  },

  effects: {
    * fetchList({ payload }, { update, call, select }) {
      const pageModel = yield select(({ supplyManage }) => supplyManage.supplies.pagination);
      const response = yield call(withLoading(Fetch, 'supplies'), {
        page_num: pageModel.current - 1,
        page_size: pageModel.pageSize,
        ...payload
      });
      yield update({ supplies: { list: response.info, pagination: { ...pageModel, total: response.count } } });
    }
  },
  reducers: {}
});
