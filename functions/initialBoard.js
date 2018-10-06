function initialBoard() {
  return {
    name: 'Untitled',

    girls: [
      {
        name: 'Unselected',
        icon: '/app/images/girls/unselected.png'
      },
      {
        name: '赤根茉莉花',
        icon: '/app/images/girls/red.png'
      },
      {
        name: '白樺アレクサンドラ',
        icon: '/app/images/girls/white.png'
      },
      {
        name: '黒木蘭',
        icon: '/app/images/girls/black.png'
      },
      {
        name: '黄楊久',
        icon: '/app/images/girls/yellow.png'
      },
      {
        name: '紫藤薫',
        icon: '/app/images/girls/purple.png'
      },
      {
        name: '緑野文子',
        icon: '/app/images/girls/green.png'
      },
      {
        name: '空井美菜',
        icon: '/app/images/girls/sky.png'
      },
      {
        name: '灰羅イルミ',
        icon: '/app/images/girls/gray.png'
      },
      {
        name: '桃園蓮華',
        icon: '/app/images/girls/pink.png'
      }
    ],

    owner: null,
    passphrase: null,
    players: [],
    state: 'open'
  };
}

export default initialBoard;
