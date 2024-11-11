import { describe,test,it,expect } from "vitest";
import { factorial, fizzBuzz, max } from "../intro";


describe("max",()=>{
    it("should return the first argument if it is greater",()=>{
        expect(max(2,1)).toBe(2)
    })

    it("should return the second argument if it is greater",()=>{
        expect(max(1,2)).toBe(2)
    })

    it("should return the first argument if both are equal",()=>{
        expect(max(1,1)).toBe(1)
    })
})

describe("fizzBuzz",()=>{
    it("should return FizzBuzz if divisible by both 3 and 5",()=>{

        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })

    it("should return Fizz if divisible by only 3",()=>{

        expect(fizzBuzz(9)).toBe("Fizz")
    })

    it("should return Buzz if divisible by only 5",()=>{

        expect(fizzBuzz(20)).toBe("Buzz")
    })

    it("should return number if not divisible by both 3 and 5",()=>{

        expect(fizzBuzz(17)).toBe("17")
    })
})


describe("factorial",()=>{
    it("should return 1 if given 0",()=>{

        expect(factorial(0)).toBe(1)
    })

    it("should return 1 if given 1",()=>{

        expect(factorial(1)).toBe(1)
    })

    it("should return 2 if given 2",()=>{

        expect(factorial(2)).toBe(2)
    })

    it("should return 6 if given 3",()=>{

        expect(factorial(3)).toBe(6)
    })

    it("should return 24 if given 4",()=>{

        expect(factorial(4)).toBe(24)
    })

    it("should return undefined for all the negative numbers",()=>{

        expect(factorial(-2)).toBeUndefined()
    })
})