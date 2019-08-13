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
      listen('/homeBanner', () => {
        setTimeout(() => {
          dispatch({
            type: 'fetchList', payload: {
              obj: 'admin',
              act: 'authlist'
            }
          });
        }, 0);

      });
    }
  },

  effects: {
    * fetchList({ payload }, { update, call, select }) {
      const pageModel = yield select(({ factoryBanner }) => factoryBanner.factory.pagination);
      const listData = yield call(withLoading(Fetch, 'banners'), {
        ...payload,
        totalpage: pageModel.totalpage,
        presentpage: pageModel.current - 1,
        amount: pageModel.total
      });
      yield update({ audits: { list: listData.list, pagination: { ...pageModel, total: listData.tc } } });
    }
  },
  reducers: {}
});
