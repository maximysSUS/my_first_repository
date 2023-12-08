class MyString extends String {

   reverse() {
      return this.split('').reverse().join('')
   }
   ucFirst() {
      let first = this
      let firstArr = first.split('')
      return firstArr[0].toUpperCase() + first.slice(1,)
   }

   ucWords() {
      let word = this
      let wordArr = word.split('')
      const words = wordArr.map((el, i) => {
         if (wordArr[i - 1] == ' ' || i == 0) return el.toUpperCase()
         else return el.toLowerCase()
      })
      return words.join('')
   }

}
const gitHub = new MyString('abcde')
const gitFirst = new MyString('abcde')
const gitWords = new MyString('abcde abcde abcde')

console.log(gitHub.reverse()); //выведет 'edcba'
console.log(gitFirst.ucFirst()); //выведет 'Abcde'
console.log(gitWords.ucWords()); //выведет 'Abcde Abcde Abcde'