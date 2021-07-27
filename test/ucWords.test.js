import ucWords from '../lib/index'

test('converts first letter of each word of a string to uppercase', () => {
    expect(ucWords('apple')).toBe('Apple')
    expect(ucWords('apple banana')).toBe('Apple Banana')
    expect(ucWords('apple banana pineapple')).toBe('Apple Banana Pineapple')
})
