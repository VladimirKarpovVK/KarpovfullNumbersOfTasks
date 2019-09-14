// 2013, 11, 24
//============================

/*
ссылка на первое
https://www.codewars.com/kata/mumbling/train/javascript*/
//======Первое задание
function accum(str) {
  let dividers = str.split("");
  let res = dividers.map((item, i) => {
    let currChar = "";
    for (let j = 0; j < i + 1; j++) {
      currChar += item;
    }
    return currChar;
  });
  return res.join("-");
}
//console.log(accum("ab"));
//=========================

//======================
/* ссылка на второе


https://www.codewars.com/kata/milk-and-cookies-for-santa/train/javascript */
//====второе задание=======
function timeForMilkAndCookies(data) {
  let day = data.getDate();
  let mounth = data.getMonth();
  if (day == 24 && mounth == 11) {
    return true;
  } else {
    return false;
  }
}
//  console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
//==============
//================

//=================

/*
 ссылка на третье
 https://www.codewars.com/kata/remove-duplicate-words/train/javascript */
//==третье задание

function Divider(str) {
  let division = str.split(" ");
  let res = [];
  let breadcrumps = {};
  for (let i = 0; i < division.length; i++) {
    if (!breadcrumps[division[i]]) {
      breadcrumps[division[i]] = true;

      res.push(division[i]);
    }
  }

  return res.toString().replace(",", " ");
}

//console.log(Divider("l l"));
//===================

/*
 ссылка на четвертое
 https://www.codewars.com/kata/array-comparator/train/javascript
 */

//============
//====Четвертое задание

function Unique(first, second) {
  const breadcrumps = {};
  for (let i = 0; i < first.length; i++) {
    breadcrumps[first[i]] = "exist";
  }
  let counter = 0;
  for (let j = 0; j < second.length; j++) {
    if (breadcrumps[second[j]]) {
      counter++;
    }
  }
  return counter;
}

// console.log(Unique([1,2,3],[1,2]))

//====

/*
Ссылка на 5е задание
https://www.codewars.com/kata/highest-and-lowest/train/javascript */
//5е задание

function highAndLow(str) {
  let arr = str.split(" ");
  // let  ex=Math.min(1,2);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let res = [max, min];
  return res.join(" ");
}

// console.log(highAndLow("1 2 3 4 5"));

//==========
//===========
