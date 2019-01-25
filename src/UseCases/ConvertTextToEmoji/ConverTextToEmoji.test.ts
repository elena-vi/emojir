import Emojir from '.';

it('should return a sensible default', () => {
  const translator = new Emojir();
  expect(translator.execute('')).toEqual('☠️');
});

describe('converting letters', () => {
  it('a into 😀', () => {
    const translator = new Emojir();
    expect(translator.execute('a')).toEqual('😀');
  });

  it('b into 🐝', () => {
    const translator = new Emojir();
    expect(translator.execute('b')).toEqual('🐝');
  });

  it('c into 🌊', () => {
    const translator = new Emojir();
    expect(translator.execute('c')).toEqual('🌊');
  });

  it('d into 🍆', () => {
    const translator = new Emojir();
    expect(translator.execute('d')).toEqual('🍆');
  });

  it('e into 🐘', () => {
    const translator = new Emojir();
    expect(translator.execute('e')).toEqual('🐘');
  });

  it('f into 🤬', () => {
    const translator = new Emojir();
    expect(translator.execute('f')).toEqual('🤬');
  });

  it('g into 🤮', () => {
    const translator = new Emojir();
    expect(translator.execute('g')).toEqual('🤮');
  });

  it('h into 💖', () => {
    const translator = new Emojir();
    expect(translator.execute('h')).toEqual('💖');
  });

  it('i into 🤩', () => {
    const translator = new Emojir();
    expect(translator.execute('i')).toEqual('🤩');
  });

  it('j into 😂', () => {
    const translator = new Emojir();
    expect(translator.execute('j')).toEqual('😂');
  });

  it('k into 🤣', () => {
    const translator = new Emojir();
    expect(translator.execute('k')).toEqual('🤣');
  });

  it('l into 🤷‍', () => {
    const translator = new Emojir();
    expect(translator.execute('l')).toEqual('🤷‍');
  });

  it('m into 💪', () => {
    const translator = new Emojir();
    expect(translator.execute('m')).toEqual('💪');
  });

  it('n into ⛔️', () => {
    const translator = new Emojir();
    expect(translator.execute('n')).toEqual('⛔️');
  });

  it('o into 👌', () => {
    const translator = new Emojir();
    expect(translator.execute('o')).toEqual('👌');
  });

  it('p into 😲', () => {
    const translator = new Emojir();
    expect(translator.execute('p')).toEqual('😲');
  });

  it('q into 💦', () => {
    const translator = new Emojir();
    expect(translator.execute('q')).toEqual('💦');
  });

  it('r into 🤘', () => {
    const translator = new Emojir();
    expect(translator.execute('r')).toEqual('🤘');
  });

  it('s into 🐍', () => {
    const translator = new Emojir();
    expect(translator.execute('s')).toEqual('🐍');
  });

  it('t into 🚍', () => {
    const translator = new Emojir();
    expect(translator.execute('t')).toEqual('🚍');
  });

  it('u into 🦄', () => {
    const translator = new Emojir();
    expect(translator.execute('u')).toEqual('🦄');
  });

  it('v into 🍕', () => {
    const translator = new Emojir();
    expect(translator.execute('v')).toEqual('🍕');
  });

  it('w into 🤠', () => {
    const translator = new Emojir();
    expect(translator.execute('w')).toEqual('🤠');
  });

  it('x into 🤢', () => {
    const translator = new Emojir();
    expect(translator.execute('x')).toEqual('🤢');
  });

  it('y into 🧐', () => {
    const translator = new Emojir();
    expect(translator.execute('y')).toEqual('🧐');
  });

  it('z into 😴', () => {
    const translator = new Emojir();
    expect(translator.execute('z')).toEqual('😴');
  });
})

describe('converting numbers', () => {
  it('1 into 😄', () => {
    const translator = new Emojir();
    expect(translator.execute('1')).toEqual('😄');
  });

  it('2 into 😁', () => {
    const translator = new Emojir();
    expect(translator.execute('2')).toEqual('😁');
  });

  it('3 into 😆', () => {
    const translator = new Emojir();
    expect(translator.execute('3')).toEqual('😆');
  });

  it('4 into 😘', () => {
    const translator = new Emojir();
    expect(translator.execute('4')).toEqual('😘');
  });

  it('5 into 😊', () => {
    const translator = new Emojir();
    expect(translator.execute('5')).toEqual('😊');
  });

  it('6 into 😇', () => {
    const translator = new Emojir();
    expect(translator.execute('6')).toEqual('😇');
  });

  it('7 into 🙂', () => {
    const translator = new Emojir();
    expect(translator.execute('7')).toEqual('🙂');
  });

  it('8 into 😉', () => {
    const translator = new Emojir();
    expect(translator.execute('8')).toEqual('😉');
  });

  it('9 into 😍', () => {
    const translator = new Emojir();
    expect(translator.execute('9')).toEqual('😍');
  });

  it('0 into 🤪', () => {
    const translator = new Emojir();
    expect(translator.execute('0')).toEqual('🤪');
  });
})
