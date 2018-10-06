import configuredDb from '~/db/configuredDb';
import firebase from '~/plugins/firebase';

function createBoard(board) {
  return new Promise((resolve, reject) => {
    let db = configuredDb();
    let user = firebase.auth().currentUser;

    let cloned = {};
    Object.assign(cloned, board);
    cloned.owner = user.uid;
    cloned.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    cloned.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    db.collection('boards')
      .add(cloned)
      .then(function(result) {
        resolve(result);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

export default createBoard;
