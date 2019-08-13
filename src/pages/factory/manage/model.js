import { pageConfig } from '@/config/default';
import model from '@/utils/baseModel';
import { withLoading } from '@/utils/dva';
import Fetch from '@/utils/baseSever';

export default model.extend({
  namespace: 'factoryManage',
  state: {
    factory: pageConfig,
    loading: {
      banners: false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/factory/manage', () => {
        setTimeout(() => {
          dispatch({
            type: 'fetchList', payload: {
              obj: 'admin',
              act: 'ftymanagelist'
            }
          });
        }, 0);

      });
    }
  },

  effects: {
    * fetchList({ payload }, { update, call, select }) {
      const pageModel = yield select(({ factoryManage }) => factoryManage.factory.pagination);
      const response = yield call(withLoading(Fetch, 'factory'), {
        page_num: pageModel.current - 1,
        page_size: pageModel.pageSize,
        ...payload
      });
      yield update({ factory: { list: response.info, pagination: { ...pageModel, total: response.count } } });
    }
  },
  reducers: {}
});
