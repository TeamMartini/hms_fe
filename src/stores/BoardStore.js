const { default: Routes } = require('../constants/routes');
const api = require('../utils/api');

const BoardStore = () => ({
  _boardList: [],
  query: '',
  async fetchBoardList() {
    const { boards } = await api.get(Routes.API.BOARD_LIST);
    this._boardList = boards;
  },
  filterFunc({ title, contents }) {
    return title.indexOf(this.query) !== -1 || contents.indexOf(this.query) !== -1;
  },
  setQuery(_query) {
    this.query = _query;
  },
  get boardList() {
    return this._boardList.filter(this.filterFunc);
  },
});

export default BoardStore;
