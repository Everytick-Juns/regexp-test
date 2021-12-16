const str = `
010-1234-5678
the6_5ee@naver.com
https://www.youtube.com/watch?v=bz5q5gl2uZA&ab_channel=Musictag
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)