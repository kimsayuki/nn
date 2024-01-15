console.log(console);
// given / return
/* anand@Sohies-MacBook-Air nJS % node 22_Console\ Object.js 
Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context]
} */


// error        // error dene mein kaam aata hai
console.error("Hey this is an error");


// assert    // condition ko assert karne mein kaam aata hai
console.assert(32 > 333);
console.assert(32 < 333);


//  clear
console.clear()     // isse pura console clear ho jaayega aur console mein upar likh kar aaayega (Console was cleared)


// table
obj = { a: 1, b: 2, c: 3 }
console.table(obj);     // yeh object ko table bana kar de dega


// warn
console.warn("it's danger here");


// info
console.info("Resident Evil 4 is a 2023 survival horror game developed and published by Capcom. It is a remake of the 2005 game Resident Evil 4. Players control the US agent Leon S. Kennedy, who must save Ashley Graham, the daughter of the United States president, from the mysterious Los Iluminados cult")
// console.info() console.log() jaisa hi hai but wo nahi hai , console.info() apne andar ke data ko browser ke console ke info section mein bhej deta hai


// time, timeEnd        // yeh pata lagata hai koi process start hokar end hone mein kitna time laga
console.time("Process 1")
console.timeEnd("Process 1")

// example:

// for loop
console.time("for loop")
for (let i = 0; i < 5; i++) {
    console.log(233);
}
console.timeEnd("for loop")

//  while loop
console.time("while loop")
let i = 0;
while (i < 5) {
    console.log(233);
    i++;
}
console.timeEnd("while loop")