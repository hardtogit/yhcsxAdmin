import { pageConfig } from '@/config/default';
import model from '@/utils/baseModel';
import { withLoading } from '@/utils/dva';
import Fetch from '@/utils/baseSever';

export default model.extend({
  namespace: 'companyManage',
  state: {
    companies: pageConfig,
    loading: {
      companies: false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/join/company', () => {
        setTimeout(() => {
          dispatch({
            type: 'fetchList', payload: {
              obj: 'admin',
              act: 'joinsubcompanylist'
            }
          });
        }, 0);

      });
    }
  },

  effects: {
    * fetchList({ payload }, { update, call, select }) {
      const pageModel = yield select(({ companyManage }) => companyManage.companies.pagination);
      const response = yield call(withLoading(Fetch, 'factory'), {
        page_num: pageModel.current - 1,
        page_size: pageModel.pageSize,
        ...payload
      });
      yield update({ companies: { list: response.info, pagination: { ...pageModel, total: response.count } } });
    }
  },
  reducers: {}
});
