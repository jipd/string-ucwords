import ucFirst from '@jipd/string-ucfirst'

/**
 * Uppercase each letter of each word
 *
 * @param {string} str The string to be capitalised
 * @returns {string} The capitalised string
 */
export default (str = '') => (str.split(' ').map(ucFirst).join(' '))
