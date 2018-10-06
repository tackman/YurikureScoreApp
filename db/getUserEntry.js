import configuredDb from '~/db/configuredDb';
import firebase from '~/plugins/firebase';

async function getUserEntry(collection, bid) {
  let db = configuredDb();
  let uid = firebase.auth().currentUser.uid;

  return new Promise((resolve, reject) => {
    db.collection(collection)
      .where('uid', '==', uid)
      .where('bid', '==', bid)
      .limit(1)
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty) {
          resolve(null);
        } else {
          querySnapshot.forEach(function(docSnapshot) {
            resolve(docSnapshot.data());
            return;
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

export default getUserEntry;
