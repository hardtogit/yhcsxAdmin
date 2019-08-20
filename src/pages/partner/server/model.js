import { pageConfig } from '@/config/default';
import model from '@/utils/baseModel';
import { withLoading } from '@/utils/dva';
import Fetch from '@/utils/baseSever';

export default model.extend({
  namespace: 'serverManage',
  state: {
    servers: pageConfig,
    loading: {
      servers: false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/partner/server', () => {
          dispatch({
            type: 'fetchList', payload: {
              obj: 'admin',
              act: 'ptrcustomerlist'
            }
          });
      });
    }
  },

  effects: {
    * fetchList({ payload }, { update, call, select }) {
      const pageModel = yield select(({ serverManage }) => serverManage.servers.pagination);
      const response = yield call(withLoading(Fetch, 'servers'), {
        page_num: pageModel.current - 1,
        page_size: pageModel.pageSize,
        ...payload
      });
      yield update({ servers: { list: response.info, pagination: { ...pageModel, total: response.count } } });
    }
  },
  reducers: {}
});
