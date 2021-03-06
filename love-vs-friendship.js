/*

If a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.



*/

function wordsToMarks(string) {
  const alp = "abcdefghijklmnopqrstuvwxyz";
  let resulty = 0;
  for (let i = 0; i < string.length; i += 1) {
    resulty += alp.indexOf(string[i]) + 1;
  }
  return resulty;
}
