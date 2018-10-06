import firebase from '~/plugins/firebase';
import configuredDb from '~/db/configuredDb';

function getJoinedBoards() {
  let db = configuredDb();
  let user = firebase.auth().currentUser;

  return new Promise((resolve, reject) => {
    db.collection('boards')
      .where('owner', '==', user.uid)
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

export default getJoinedBoards;
