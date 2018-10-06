import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';

fixture`trial page`.page`http://localhost:3000/app/trial/`;

test('/trial link woks', async t => {
  const root = VueSelector();

  const linkExists = Selector('a').exists;
  const linkHref = Selector('a').getAttribute('href');

  await t
    .expect(linkExists)
    .eql(true)
    .expect(linkHref)
    .eql('/app/');
});
