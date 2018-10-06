<template>
  <div class="signup">
    <h2>ログインして利用</h2>
    <button @click="signUp" class="signup">
      <img src="/app/images/btn_google_signin_dark_normal_web@2x.png" class="signup-icon" /></button>
    <p>
      <nuxt-link to="/trial/">ログインせずに利用：入力は保存されません</nuxt-link>
    </p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    signUp: function() {
      console.log('begin singup');
      let me = this;

      let provider = new firebase.auth.GoogleAuthProvider();
      let auth = firebase.auth();

      auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

      auth
        .signInWithPopup(provider)
        .then(function(result) {
          console.log('success', result);
          me.$router.push({ path: '/profile/joined/' });
        })
        .catch(function(error) {
          console.log('error', error);
        });
    },

    addEntry: function() {
      let user = firebase.auth().currentUser;
      console.log(user.uid);
      let db = firebase.firestore();
      const settings = { timestampsInSnapshots: true };
      db.settings(settings);
      db
        .collection('inputs')
        .add({
          uid: user.uid,
          bid: 'testXXXXXXXX'
        })
        .then(function(result) {
          console.log(result);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getEntry: function() {
      let user = firebase.auth().currentUser;
      console.log('somtheingelse');
      let db = firebase.firestore();
      const settings = { timestampsInSnapshots: true };
      db.settings(settings);

      db
        .collection('inputs')
        .where('uid', '==', 'somtheingelse')
        .where('bid', '==', 'testXXXXXXXX')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc);
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}

.signup {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.signup-icon {
  height: 46px;
  widows: 191px;
}
</style>
