import React from "react";
import Calculate from "./../../logic/Calculate";

describe('Calculate function test', () => {
    test('returns undefined for calculation with only zero', () => {
        const obj = {
          total: 0,
          next: '0',
          operation: '+',
        };
        const buttonName = '0';
        expect(Calculate(obj, buttonName).next).toBeUndefined();
      });
    
      test('returns both numbers when = is not called', () => {
        const obj = {
          total: 0,
          next: '3',
          operation: '+',
        };
        const buttonName = '2';
        expect(Calculate(obj, buttonName).next).toBe('32');
      });
    
      test('performs addition when = is called', () => {
        const obj = {
          total: '3',
          next: '2',
          operation: '+',
        };
        const buttonName = '=';
        expect(Calculate(obj, buttonName).total).toBe('5');
      });
    
      test('clears the objs when AC is called', () => {
        const obj = {
          total: '3',
          next: '2',
          operation: '+',
        };
        const buttonName = 'AC';
        expect(Calculate(obj, buttonName).total).toBe(0);
      });
    });