import { Property, Thing, Value } from 'webthing';


export class RgbLedstripThing extends Thing {
  constructor() {
    super(
      'aigor:iot:ledstrip',
      'RGB led strip'
      ['OnOffSwitchgit '],
      'RGB led strip connected to GPIO'
    );

    new Property(
      this,
      'red',
      new Value(15, (v) => {
        console.log('red level is now', v);
      }),
      {
        '@type': 'LevelProperty',
        label: 'Red level',
        type: 'number',
        description: 'red level from 0-255',
        minimum: 0,
        maximum: 255,
      }
    );

    new Property(
      this,
      new Value(15, (v) => {
        console.log('green level is now', v);
      }),
      {
        '@type': 'LevelProperty',
        label: 'Green level',
        type: 'number',
        description: 'green level from 0-255',
        minimum: 0,
        maximum: 255,
      }
    );

    new Property(
      this,
      'blue',
      new Value(15, (v) => {
        console.log('blue level is now', v);
      }),
      {
        '@type': 'LevelProperty',
        label: 'Blue level',
        type: 'number',
        description: 'blue level from 0-255',
        minimum: 0,
        maximum: 255,
      }
    );

  }
}