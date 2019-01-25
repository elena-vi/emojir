import Reacr from 'react';

export default class Emojir {
  private tings: Map<string, string> = new Map<string, string>();
  constructor() {
    this.tings.set('a','😀');
    this.tings.set('b','🐝');
    this.tings.set('c','🌊');
    this.tings.set('d','🍆');
    this.tings.set('e','🐘');
    this.tings.set('f','🤬');
    this.tings.set('g','🤮');
    this.tings.set('h','💖');
    this.tings.set('i','🤩');
    this.tings.set('j','😂');
    this.tings.set('k','🤣');
    this.tings.set('l','🤷‍');
    this.tings.set('m','💪');
    this.tings.set('n','⛔️');
    this.tings.set('o','👌');
    this.tings.set('p','😲');
    this.tings.set('q','💦');
    this.tings.set('r','🤘');
    this.tings.set('s','🐍');
    this.tings.set('t','🚍');
    this.tings.set('u','🦄');
    this.tings.set('v','🍕');
    this.tings.set('w','🤠');
    this.tings.set('x','🤢');
    this.tings.set('y','🧐');
    this.tings.set('z','😴');
    this.tings.set('1','😄');
    this.tings.set('2','😁');
    this.tings.set('3','😆');
    this.tings.set('4','😘');
    this.tings.set('5','😊');
    this.tings.set('6','😇');
    this.tings.set('7','🙂');
    this.tings.set('8','😉');
    this.tings.set('9','😍');
    this.tings.set('0','🤪');
  }
  execute(text: string): string {
    return this.tings.get(text) || '☠️';
  }
}
