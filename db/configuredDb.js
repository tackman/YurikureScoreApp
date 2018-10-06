import firebase from '~/plugins/firebase';

function configuredDb() {
  let db = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  db.settings(settings);

  return db;
}

export default configuredDb;
