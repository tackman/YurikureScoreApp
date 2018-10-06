import configuredDb from '~/db/configuredDb';

function getOpenBoards() {
  let db = configuredDb();

  return new Promise((resolve, reject) => {
    db.collection('boards')
      .where('state', '==', 'open')
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()
      .then(function(querySnapshot) {
        let boards = [];
        querySnapshot.forEach(doc => {
          boards.push({
            id: doc.id,
            data: doc.data()
          });
        });

        resolve(boards);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

export default getOpenBoards;
