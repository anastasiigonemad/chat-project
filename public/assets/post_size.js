export default function postSize(str) {
  const zones = [
    'com',
    'org',
    'de',
    'net',
    'uk',
    'cn',
    'info',
    'nl',
    'eu',
    'ru',
  ];
  const string = str.split(' ');
  const newStr = string.filter(
    (item) => !zones.some((zone) => item.endsWith(zone)),
  );
  return newStr.join(' ').length;
}
