export default function createRandomNumber() {
  return Date.now() + ' - ' + Math.floor(Math.random() * 1001);
}
