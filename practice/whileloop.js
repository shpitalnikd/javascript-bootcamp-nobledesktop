const arr = [1, 2, 3];
const arr2 = ["a", "b", "c"];
//pokemon array

// l = lenght of an array
// last (n) element in an array will always be at
// last element = n - 1
//
const pokemon = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Pidgey",
  "Rattata",
  "Jigglypuff",
  "Meowth",
  "Psyduck",
];
//console.log(pokemon[pokemon.length - 1], pokemon.length - 1);
//  // 1D array
// matrix
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// cartoon network shows matrix
const arr4 = [
  ["Ed Edd n Eddy", "Dexter's Laboratory", "Powerpuff Girls"],
  [
    "Johnny Bravo",
    "Courage the Cowardly Dog",
    "The Grim Adventures of Billy and Mandy",
  ],
  ["Teen Titans", "Foster's Home for Imaginary Friends", "Adventure Time"],
];

const charmander = {
  type: "fire",
  moveset: ["scratch", "bite", "ember", "tail whip"],
  level: 8,
  evolutions: [
    {
      name: "charmeleon",
      level: 16,
      moveset: ["scratch", "bite", "ember", "tail whip"],
      evolutions: [
        {
          name: "charizard",
          level: 36,
          moveset: ["scratch", "bite", "ember", "tail whip"],
          evolutions: [],
        },
      ],
    },
  ],
};
// 3 pop
// 2 pop
// 1 pop
while (pokemon.length > 0) {
  console.log(pokemon.pop());
}
//console.log(arr3[0][2]);

//console.log(arr4[0][2]);
let sum;
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;

  sum += 1;
}

console.log(sum);
