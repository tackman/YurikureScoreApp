<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

input {
  background-color: #faf4f0;
  text-align: center;
  text-shadow: 1px;
  font-size: 16px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #4d484a;
}

.title {
  color: white;
  text-align: center;
  font-size: 24px;
  float: center;
  width: 90%;
  padding-top: 8px;
  padding-right: 5%;
}

.back {
  width: 10%;
  background-color: #e6c9ca;
}

.button-link {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}

.link-wrapper {
  margin: 10px;
}

.link {
  color: #4d484a;
  text-decoration: none;
  border-color: #4d484a;
  font-size: 24px;
  border-style: solid;
  min-width: 90%;
  padding: 3px;
  border-radius: 14px;
}

.create-button {
  background-color: #99a8ce;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.show-control-button {
  width: 80%;
  background-color: #b05883;
  color: white;
  font-size: 18px;
  left: 10%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #88757c;
  width: 100%;
}

.navbar-element {
  float: left;
}

.navbar-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar-active {
  background-color: #c2a2b6;
}

.girl-icon {
  width: 40px;
  height: auto;
  margin: 5px;
}

.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.girl-icon {
  width: 40pt;
  height: auto;
}

.girl-choser {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: burlywood;
  border: 3px solid gray;
  width: 300px;
  height: auto;
  z-index: 2;
  visibility: hidden;
}

.chooser-wrapper {
  display: grid;
  position: fixed;
  grid-template-columns: repeat(5, 65px);
  grid-template-rows: repeat(2, 65px);
  background-color: #99a8ce;
  z-index: 100;
  border-radius: 10px;
}

.chooser-button-1 {
  grid-column: 1;
  grid-row: 1;
}

.chooser-button-2 {
  grid-column: 2;
  grid-row: 1;
}

.chooser-button-3 {
  grid-column: 3;
  grid-row: 1;
}

.chooser-button-4 {
  grid-column: 4;
  grid-row: 1;
}

.chooser-button-5 {
  grid-column: 5;
  grid-row: 1;
}

.chooser-button-6 {
  grid-column: 1;
  grid-row: 2;
}

.chooser-button-7 {
  grid-column: 2;
  grid-row: 2;
}

.chooser-button-8 {
  grid-column: 3;
  grid-row: 2;
}

.chooser-button-9 {
  grid-column: 4;
  grid-row: 2;
}

.chooser-button-10 {
  grid-column: 5;
  grid-row: 2;
}
</style>

