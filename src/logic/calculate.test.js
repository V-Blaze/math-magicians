import React from "react";
import calculate from "./calculate";

describe('Test the calculate.js Logic', () => {
    test('Add 2 and 3 to get 5', ()=> {
        let obj = {
            total: "2",
            next: "3",
            operation: "+"
        }

        let buttonName = '+'

        let result = calculate(obj, buttonName)

        expect(result.total).toBe('5')
        
    })

    test('subtract 20 from 41 to get 21', ()=> {
        let obj = {
            total: "41",
            next: "20",
            operation: "-"
        }

        let buttonName = '-'

        let result = calculate(obj, buttonName)

        expect(result.total).toBe('21')
    })

    test('expect 50 mod 4 to give 2', ()=> {
        let obj = {
            total: "50",
            next: "4",
            operation: "%"
        }

        let buttonName = '%'

        let result = calculate(obj, buttonName)

        expect(result.total).toBe('2')
    })
    test('expect the AC button to retun keys with null value', ()=> {
        let obj = {
            total: "50",
            next: "4",
            operation: "%"
        }

        let buttonName = 'AC'

        let result = calculate(obj, buttonName)

        expect(result.total).toBe(null)
        expect(result.operation).toBeNull()
    })
})