import React from 'react';
import ReactDOM from 'react-dom';
import toJSON from './ToJson'
import getData from './getData'

it("Won't allow invalid parameters.", () => {
  it("Won't allow non-objects in param1.", () => {
    expect(toJSON('http', 'test')).toBe(null);
    expect(toJSON([], 'test')).toBe(null);
  });

  it("Won't allow non-object in param2.", () => {
    expect(toJSON({'test': 'test'}, {})).toBe(null);
    expect(toJSON({'test': 'test'}, [])).toBe(null);
  });
});

it("Won't pass empty arguments.", () => {
  it("Won't allow empty args in param1.", () => {
    expect(toJSON({}, 'test')).toBe(null);
    expect(toJSON('', 'test')).toBe(null);
  });
  it("Won't allow empty args in param2.", () => {
    expect(toJSON({'test': 'test'}, '')).toBe(null);
    expect(toJSON({'test': 'test'}, 'aok')).toBe(null);
  });
});