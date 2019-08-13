import { pageConfig } from '@/config/default';
import model from '@/utils/baseModel';
import { withLoading } from '@/utils/dva';
import Fetch from '@/utils/baseSever';

export default model.extend({
  namespace: 'newsManage',
  state: {
    news: pageConfig,
    loading: {
      news: false
    }
  },
  subscriptions: {
    setupSubscriber({ listen, dispatch }) {
      listen('/news/manage', () => {
        setTimeout(() => {
          dispatch({
            type: 'fetchList', payload: {
              obj: 'admin',
              act: 'newsmanagelist'
            }
          });
        }, 0);
      });
    }
  },

  effects: {
    * fetchList({ payload }, { update, call, select }) {
      const pageModel = yield select(({ newsManage }) => newsManage.news.pagination);
      const response = yield call(withLoading(Fetch, 'news'), {
        page_num: pageModel.current - 1,
        page_size: pageModel.pageSize,
        ...payload
      });
      yield update({ news: { list: response.info, pagination: { ...pageModel, total: response.count } } });
    }
  },
  reducers: {}
});
