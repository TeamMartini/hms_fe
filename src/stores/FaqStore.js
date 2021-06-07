import Routes from '../constants/routes';
import api from '../utils/api';

const FaqStore = () => ({
  _faqList: [],
  query: '',
  async fetchFaqList() {
    const { faqs } = await api.get(Routes.API.FAQ_LIST);
    this._faqList = faqs;
  },
  filterFunc({ type, title, content }) {
    const typeSatisfy = type.indexOf(this.query) !== -1;
    const titleSatisfy = title.indexOf(this.query) !== -1;
    const contentSatisfy = content.indexOf(this.query) !== -1;
    return typeSatisfy || titleSatisfy || contentSatisfy;
  },
  setQuery(_query) {
    this.query = _query;
  },
  get faqList() {
    return this._faqList.filter(this.filterFunc);
  },
});

export default FaqStore;
