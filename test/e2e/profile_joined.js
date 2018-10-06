import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';

fixture`/profile/joined/`.page`http://localhost:3000/app/profile/joined/`;

test('back link woks', async t => {
  const root = VueSelector();

  const selected = Selector('a');
  const buttonSelected = Selector('#create-button');
  const linkHref = selected.nth(0).getAttribute('href');

  // TODO 作成ボタンのテスト
  await t
    .expect(linkHref)
    .eql('/app/')
});
