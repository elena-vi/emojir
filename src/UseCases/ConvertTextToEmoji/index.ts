import Reacr from 'react';

export default class Emojir {
  private tings: Map<string, string> = new Map<string, string>();
  constructor() {
    this.tings.set('a','😀');
    this.tings.set('b','🐝');
    this.tings.set('c','🌊');
    this.tings.set('d','🍆');
  }
  execute(text: string): string {
    return this.tings.get(text) || '☠️';
  }
}
