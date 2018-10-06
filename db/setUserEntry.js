import configuredDb from '~/db/configuredDb';
import firebase from '~/plugins/firebase';

async function setUserEntry(collection, bid, entry) {
  let db = configuredDb();
  let uid = firebase.auth().currentUser.uid;

  return new Promise((resolve, reject) => {
    let updateObj = {};
    Object.assign(updateObj, entry);
    updateObj.uid = uid;
    updateObj.bid = bid;

    db.collection(collection)
      .doc(uid + bid)
      .set(updateObj)
      .then(function() {
        resolve('DB Set ok');
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

export default setUserEntry;
