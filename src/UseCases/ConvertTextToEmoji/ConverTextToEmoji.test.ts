import Emojir from '.';

it('should return a sensible default', () => {
  const translator = new Emojir();
  expect(translator.execute('')).toEqual('☠️');
});

it('should turn a into 😀', () => {
  const translator = new Emojir();
  expect(translator.execute('a')).toEqual('😀');
});

it('should turn b into 🐝', () => {
  const translator = new Emojir();
  expect(translator.execute('b')).toEqual('🐝');
});

it('should turn c into 🌊', () => {
  const translator = new Emojir();
  expect(translator.execute('c')).toEqual('🌊');
});

it('should turn d into 🍆', () => {
  const translator = new Emojir();
  expect(translator.execute('d')).toEqual('🍆');
});
