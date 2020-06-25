// Import stylesheets
import './style.css';

// Write Javascript code!
let aList01 = ['aaa','bbb','ccc','111','222','333','a1','b2','c3'];
let aList01ilen = aList01.length;

console.log("aList01的下标数是：" + aList01ilen);
console.log(aList01);
console.log(aList01.indexOf('333'));

const appDiv = document.getElementById('app');
appDiv.innerHTML = aList01;

// 多维数组
let aList = [[1,2,3,4],['a','b','c'],[6,7,8]];
console.info("多维数组的打印：" + aList[0].length)

// 循环语句 for循环数组

  let appDiv1 = document.getElementById('app1');
  let aList02 = ['aaa','bbb','ccc','111','222','333','a1','b2','c3'];
  let aList02ilen = aList01.length;
  let sTr ='';
  for(let i=0; i<aList02ilen; i++){
    sTr += '<li>' + aList02[i] + '</li>';
  }
  appDiv1.innerHTML = "<ul>" + sTr + "</ul>";
