// First task

function getCount() {
  let count = 0;
  function rememberCount() {
    return count++;
  }
  return rememberCount;
}

const addCount = getCount();
console.log(addCount());
console.log(addCount());
console.log(addCount());

console.log("---------------------------");
//  second task

function makeSentence() {
  const greeting = "Hey";
  let fullSentence = "";
  function rememberSentence(word) {
    fullSentence += word + " ";
    console.log(`${greeting} ${fullSentence} `);
    return greeting + fullSentence;
  }
  return rememberSentence;
}

const makeText = makeSentence();
makeText("how");
makeText("u");
makeText("doing?");

console.log("---------------------------");
// Third  task

function holdDatas() {
  let arr = [];
  function collectData(data) {
    arr = [...arr, data];
    console.log(arr);
  }
  function clearData() {
    arr = [];
    console.log("arr is empty now.");
  }
  return {
    collectData,
    clearData,
  };
}

const addData = holdDatas();
addData.collectData(12);
addData.collectData(21);
addData.collectData(11);
addData.clearData();
