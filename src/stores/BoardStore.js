import Routes from '../constants/routes';
import api from '../utils/api';

const BoardStore = () => ({
  _boardList: [],
  query: '',
  page: 0,
  maxPage: 0,
  setPage(_page) {
    this.page = _page;
    if (this.page < 0) this.page = 0;
    if (this.page > this.maxPage) {
      this.page = this.maxPage10;
    }
  },
  calcMaxPage(from) {
    const lng = from.length - 1;
    const count = lng - (lng % 10);
    this.maxPage = count / 10;
  },
  async fetchBoardList() {
    const { board } = await api.get(Routes.API.BOARD_LIST);
    this._boardList = board.length !== 0 ? board.reverse() : [{ title: '글이 없습니다' }];
    this.calcMaxPage(this._boardList);
  },
  filterFunc({ title, contents }) {
    return title.indexOf(this.query) !== -1 || contents.indexOf(this.query) !== -1;
  },
  setQuery(_query) {
    this.query = _query;
    this.page = 0;
    const filtered = this._boardList.filter(this.filterFunc);
    this.calcMaxPage(filtered);
  },
  get boardList() {
    const boards = this._boardList.filter(this.filterFunc);
    const count = Math.min(boards.length - this.page * 10, 10);
    return boards.splice(this.page * 10, count);
  },
  boardByNumber(num) {
    return this._boardList.find(({ postNumber }) => postNumber === num);
  },
});

export default BoardStore;
