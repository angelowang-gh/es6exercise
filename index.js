// Import stylesheets
import './style.css';
import destructing from './component/destructing.js'

// Write Javascript code!
let aList01 = ['aaa','bbb','ccc','111','222','333','a1','b2','c3'];
let aList01ilen = aList01.length;

console.log("aList01的下标数是：" + aList01ilen);
console.log(aList01);
// 333位于数组的第5个
console.log(aList01.indexOf('333'));

const appDiv = document.getElementById('app');
// HTML写入appDiv
appDiv.innerHTML = aList01;



// 多维数组
let aList = [[1,2,3,4],['a','b','c'],[6,7,8]];
console.info("多维数组的打印：" + aList[0].length)



// 循环语句 for循环数组 输出HTML结构返回
  let appDiv1 = document.getElementById('app1');
  let aList02 = ['aaa','bbb','ccc','111','222','333','a1','b2','c3'];
  let aList02ilen = aList01.length;
  let sTr ='';
  for(let i=0; i<aList02ilen; i++){
    sTr += '<li>' + aList02[i] + '</li>';
  }
  // HTML写入appDiv1
  appDiv1.innerHTML = "<ul>" + sTr + "</ul>";



console.log("\n ----- 数组解构赋值:destructing -----");
console.log(destructing());
