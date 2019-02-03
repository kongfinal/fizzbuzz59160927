const fizzBuzz = require('./fizzBuzz');

test('ตัวเลขต้องมากกว่า 0',() =>{
    expect(fizzBuzz(0)).toBe(false);
})
test('ถ้าตัวเลขหาร 3 ลงตัว แสดง Fizz',() =>{
    expect(fizzBuzz(3)).toBe("1 2 Fizz");
})

test('ถ้าตัวเลขหาร 5 ลงตัว แสดง Buzz',() =>{
    expect(fizzBuzz(5)).toBe("1 2 Fizz 4 Buzz");
})

test('ถ้าตัวเลขหาร 5 และ 3 ลงตัว แสดง Buzz',() =>{
    expect(fizzBuzz(15)).toBe("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
})

test('ถ้าตัวเลขหารทั้ง 3 และ 5 ไม่ลงตัว แสดงตัวเลขนั้น ',() =>{
    expect(fizzBuzz(2)).toBe("1 2");
})