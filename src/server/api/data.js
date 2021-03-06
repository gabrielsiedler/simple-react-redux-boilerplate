const fetch = async () => {
  const repositories = [
    {
      author: 'brunolm',
      url: 'https://github.com/brunolm/ts-react-redux-startup',
      name: 'ts-react-redux-startup',
    },
    {
      author: 'jpsierens',
      url: 'https://github.com/jpsierens/webpack-react-redux',
      name: 'webpack-react-redux',
    },
    {
      author: 'pirenelito',
      url: 'https://github.com/saguijs/sagui',
      name: 'sagui',
    },
    {
      author: 'esnunes',
      url: 'https://github.com/sqlectron/sqlectron-term',
      name: 'sqlectron-term',
    },
    {
      author: 'maxcnunes',
      url: 'https://github.com/sqlectron',
      name: 'sqlectron',
    },
    {
      author: 'gabrielsiedler',
      url: 'https://github.com/gabrielsiedler/simple-react-redux-boilerplate',
      name: 'simple-react-redux-boilerplate',
    },
    {
      author: 'krolow',
      url: 'https://github.com/krolow/dolarhoje',
      name: 'dolarhoje',
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return new Promise(resolve => setTimeout(() => resolve(repositories), 2000));
};

export default async function (req, res) {
  const repositories = await fetch();

  res.json({ repositories });
}
