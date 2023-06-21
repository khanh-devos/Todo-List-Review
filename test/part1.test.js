import * as funcs from "./part1.js";

describe('part 1', () => {
    test('addNew', () => {
      expect(funcs.addNew('task4')).toStrictEqual({
        index: 4,
        description: 'task4',
        completed: false,
      });
  
      expect(() => funcs.addNew('')).toThrow(/task cannot be an empty string/);
    
    });
  
    
  });