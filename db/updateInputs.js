import setUserEntry from '~/db/setUserEntry';

function updateInputs(bid, inputs, e) {
  let updateObj = {};
  Object.assign(updateObj, inputs);
  updateObj[e.target.attributes.inputfield.value] = Number(e.target.value);

  setUserEntry('inputs', bid, updateObj);
}

export default updateInputs;
