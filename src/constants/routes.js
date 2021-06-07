const Routes = {
  ROOT: '/',
  INTRO: '/intro',
  PLACE: '/place',
  FREE: '/suggest/free',
  SUGGEST: '/suggest',
  FAQ: '/suggest/faq',
  WRITE: '/suggest/write',
  READ: '/suggest/read?',

  API: {
    LOGIN: '/auth/login',
    CHECK: '/auth/check',

    FAQ_LIST: '/faq/listFaq',

    SUGGEST_ADD: '/suggest/createSuggest',

    BOARD_ADD: '/board/createBoard',
    BOARD_LIST: '/board/listBoard',
    BOARD_INFO: '/board/getBoardInfo/',
  },
};

export default Routes;
