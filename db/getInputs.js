import firebase from '~/plugins/firebase';
import initialPoints from '~/functions/initialPoints';

function getInputs(bid) {
  let user = firebase.auth().currentUser;
  let db = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  db.settings(settings);

  return new Promise((resolve, reject) => {
    db.collection('inputs')
      .where('uid', '==', user.uid)
      .where('bid', '==', bid)
      .limit(1)
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty) {
          console.log('no value on db');
          resolve(initialPoints());
        } else {
          let docRef = querySnapshot.docs[0];
          let doc = db.collection('inputs').doc(docRef.id);
          doc.get().then(function(doc) {
            console.log('hit db data', doc.data());
            resolve(doc.data());
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

export default getInputs;
