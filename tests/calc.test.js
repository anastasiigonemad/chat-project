// eslint-disable-next-line import/no-extraneous-dependencies
import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

// eslint-disable-next-line func-names
describe('Функция проверки расчета размера поста', function () {
  // eslint-disable-next-line func-names
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
});
