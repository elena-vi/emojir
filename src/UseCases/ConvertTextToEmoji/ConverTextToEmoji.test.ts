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

it('should turn e into 🐘', () => {
  const translator = new Emojir();
  expect(translator.execute('e')).toEqual('🐘');
});

it('should turn f into 🤬', () => {
  const translator = new Emojir();
  expect(translator.execute('f')).toEqual('🤬');
});

it('should turn g into 🤮', () => {
  const translator = new Emojir();
  expect(translator.execute('g')).toEqual('🤮');
});

it('should turn h into 💖', () => {
  const translator = new Emojir();
  expect(translator.execute('h')).toEqual('💖');
});

it('should turn i into 🤩', () => {
  const translator = new Emojir();
  expect(translator.execute('i')).toEqual('🤩');
});

it('should turn j into 😂', () => {
  const translator = new Emojir();
  expect(translator.execute('j')).toEqual('😂');
});

it('should turn k into 🤣', () => {
  const translator = new Emojir();
  expect(translator.execute('k')).toEqual('🤣');
});

it('should turn l into 🤷‍', () => {
  const translator = new Emojir();
  expect(translator.execute('l')).toEqual('🤷‍');
});

it('should turn m into 💪', () => {
  const translator = new Emojir();
  expect(translator.execute('m')).toEqual('💪');
});

it('should turn n into ⛔️', () => {
  const translator = new Emojir();
  expect(translator.execute('n')).toEqual('⛔️');
});

it('should turn o into 👌', () => {
  const translator = new Emojir();
  expect(translator.execute('o')).toEqual('👌');
});

it('should turn p into 😲', () => {
  const translator = new Emojir();
  expect(translator.execute('p')).toEqual('😲');
});

it('should turn q into 💦', () => {
  const translator = new Emojir();
  expect(translator.execute('q')).toEqual('💦');
});

it('should turn r into 🤘', () => {
  const translator = new Emojir();
  expect(translator.execute('r')).toEqual('🤘');
});

it('should turn s into 🐍', () => {
  const translator = new Emojir();
  expect(translator.execute('s')).toEqual('🐍');
});

it('should turn t into 🚍', () => {
  const translator = new Emojir();
  expect(translator.execute('t')).toEqual('🚍');
});

it('should turn u into 🦄', () => {
  const translator = new Emojir();
  expect(translator.execute('u')).toEqual('🦄');
});

it('should turn v into 🍕', () => {
  const translator = new Emojir();
  expect(translator.execute('v')).toEqual('🍕');
});

it('should turn w into 🤠', () => {
  const translator = new Emojir();
  expect(translator.execute('w')).toEqual('🤠');
});

it('should turn x into 🤢', () => {
  const translator = new Emojir();
  expect(translator.execute('x')).toEqual('🤢');
});

it('should turn y into 🧐', () => {
  const translator = new Emojir();
  expect(translator.execute('y')).toEqual('🧐');
});

it('should turn z into 😴', () => {
  const translator = new Emojir();
  expect(translator.execute('z')).toEqual('😴');
});
