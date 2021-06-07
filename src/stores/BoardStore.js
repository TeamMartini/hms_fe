import Routes from '../constants/routes';
import api from '../utils/api';

const BoardStore = () => ({
  _boardList: [],
  query: '',
  async fetchBoardList() {
    const { board } = await api.get(Routes.API.BOARD_LIST);
    this._boardList = board.length !== 0 ? board.reverse() : [{ title: '글이 없습니다' }];
  },
  filterFunc({ title, contents }) {
    return title.indexOf(this.query) !== -1 || contents.indexOf(this.query) !== -1;
  },
  setQuery(_query) {
    this.query = _query;
  },
  get boardList() {
    const boards = this._boardList.filter(this.filterFunc);
    const count = Math.min(boards.length, 10);
    return boards.splice(0, count);
  },
});

export default BoardStore;
