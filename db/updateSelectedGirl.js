import setUserEntry from '~/db/setUserEntry';

function updateSelectedGirl(bid, selectedGirlInduces, update) {
  let updateObj = {};
  Object.assign(updateObj, selectedGirlInduces);
  updateObj[update.objective] = Number(update.newIndex);

  setUserEntry('selectedGirls', bid, updateObj);
}

export default updateSelectedGirl;
