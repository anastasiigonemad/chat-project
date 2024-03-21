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
  // eslint-disable-next-line func-names
  it('с ссылкой ', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет! anastasiia.com');
    assert.equal(expectedResult, result);
  });
  // eslint-disable-next-line func-names
  it('с ссылкой 2', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет! www.anastasiia.com');
    assert.equal(expectedResult, result);
  });

  // eslint-disable-next-line func-names
  it('с ссылками', function () {
    const expectedResult = 57;
    const result = postSize(
      'Всем привет! www.anastasiia.com - сайт, instagram.com/anastasiia - instagram',
    );
    assert.equal(expectedResult, result);
  });

  // eslint-disable-next-line func-names
  it('с ссылкой по середине поста', function () {
    const expectedResult = 23;
    const result = postSize('Всем привет! www.anastasiia.com - мой сайт');
    assert.equal(expectedResult, result);
  });

  // eslint-disable-next-line func-names
  it('с ссылкой в начале поста', function () {
    const expectedResult = 24;
    const result = postSize('www.anastasiia.com - мой сайт. Всем привет!');
    assert.equal(expectedResult, result);
  });

  // eslint-disable-next-line func-names
  it('средний пост', function () {
    const expectedResult = 229;
    const result = postSize(
      'Всем привет! Это был странный мир: по утрам за окном не пели птицы, не шелестела трава, собаки лаяли совершенно беззвучно, а мужики, то и дело ругающиеся на улицах, широко раскрывали рты, но ни единого звука оттуда не доносилось.',
    );
    assert.equal(expectedResult, result);
  });

  // eslint-disable-next-line func-names
  it('длинный пост', function () {
    const expectedResult = 353;
    const result = postSize(
      'Всем привет! Это был странный мир: по утрам за окном не пели птицы, не шелестела трава, собаки лаяли совершенно беззвучно, а мужики, то и дело ругающиеся на улицах, широко раскрывали рты, но ни единого звука оттуда не доносилось. В десять лет, после тяжело перенесённой скарлатины, Костя почти оглох, и вот уже шестой год его окружал мир тишины и покоя.',
    );
    assert.equal(expectedResult, result);
  });
  // eslint-disable-next-line func-names
  it('средний пост ссылкой посередине', function () {
    const expectedResult = 229;
    const result = postSize(
      'Всем привет! Это был странный мир: по утрам за окном не пели птицы, не шелестела трава, собаки лаяли совершенно беззвучно, а мужики, www.wiki.com то и дело ругающиеся на улицах, широко раскрывали рты, но ни единого звука оттуда не доносилось.',
    );
    assert.equal(expectedResult, result);
  });

  // eslint-disable-next-line func-names
  it('длинный пост c ссылкой', function () {
    const expectedResult = 353;
    const result = postSize(
      'Всем привет! Это был странный мир: по утрам за окном не пели птицы, не шелестела трава, собаки лаяли совершенно беззвучно, а мужики, то и дело ругающиеся на улицах, широко раскрывали рты, но ни единого звука оттуда не www.wiki.com доносилось. В десять лет, после тяжело перенесённой скарлатины, Костя почти оглох, и вот уже шестой год его окружал мир тишины и покоя.',
    );
    assert.equal(expectedResult, result);
  });
  // eslint-disable-next-line func-names
  it('ссылка', function () {
    const expectedResult = 0;
    const result = postSize('www.wiki.ru');
    assert.equal(expectedResult, result);
  });
});
