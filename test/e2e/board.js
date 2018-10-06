import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';

fixture`board page`.page`http://localhost:3000/app/board/?hogehogehoge`;

test('/trial link woks', async t => {
  const root = VueSelector();

  const linkExists = Selector('a').exists;
  const linkHref = Selector('a').getAttribute('href');

  await t
    .expect(linkExists)
    .eql(true)
    .expect(linkHref)
    .eql('/app/profile/joined/');
});
