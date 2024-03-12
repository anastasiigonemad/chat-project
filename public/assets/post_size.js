const posSize = (str) => {
  const links = [
    "com",
    "org",
    "de",
    "net",
    "uk",
    "cn",
    "info",
    "nl",
    "eu",
    "ru",
  ];

  let parts = str.split(/((http|https):\/\/[a-zа-я0-9-]+\.[a-zа-я0-9-]{2,})/gi);
  let newStr = parts[0] + parts.at(-1);

  return newStr.length;
};

console.log(
  posSize(
    "Anastasiia hello anastasiia.com and good morning http://incurance.com"
  )
);
