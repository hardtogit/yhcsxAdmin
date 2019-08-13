import { pageConfig } from '@/config/default';
import model from '@/utils/baseModel';
import { withLoading } from '@/utils/dva';
import Fetch from '@/utils/baseSever';

export default model.extend({
  namespace: 'homePartner',
  state: {
    partners: pageConfig,
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
      const pageModel = yield select(({ homePartner }) => homePartner.partners.pagination);
      const listData = yield call(withLoading(Fetch, 'partners'), {
        ...payload,
        totalpage: pageModel.totalpage,
        presentpage: pageModel.current - 1,
        amount: pageModel.total
      });
      yield update({ partners: { list: listData.list, pagination: { ...pageModel, total: listData.tc } } });
    }
  },
  reducers: {}
});
