// JSON数组对象翻转排序
import dummy from '../jsonData/dummy.json';

export function reverseJsonArray(){

  function reverseJsonArray(arrayString) {

    let parsedArray = [];

    if (typeof(arrayString) != 'string') return false;

    try { parsedArray = JSON.parse(arrayString); }
    catch { return false; }

    // 判断一个变量是否为数组，返回值有是和否
    // 逻辑是如果不是数组就返回false
    if ( !Array.isArray(parsedArray)) return false;

    const reversedArray = parsedArray.reverse(); 

    let a;
      try {
        a = JSON.stringify(reversedArray);
      } catch {
        return false;
      }
      return a;
  } //reverseJsonArray end

  console.log( reverseJsonArray());
  // console.log( typeof(''));
  console.log( reverseJsonArray(false));
  console.log( reverseJsonArray([1,2,3,4]));
  console.log( reverseJsonArray('asd'));
  //////////////////////////////////////////
  console.log( reverseJsonArray('[1]'));
  console.log( reverseJsonArray('[]'));
  console.log( reverseJsonArray('[1,2,3,4]'));
  console.log( reverseJsonArray('[1,2,3]'));
  //////////////////////////////////////////
  console.log( reverseJsonArray(dummy.companies));
}

export function isArrayTestWrap(){

  function isArrayTest(arrayString) {

    // let parsedArray = [];

    // if (typeof(arrayString) != 'string') return false;

    // try { parsedArray = JSON.parse(arrayString); }
    // catch { return false; }

    // 判断一个变量是否为数组，返回值有是和否
    // if ( !Array.isArray(arrayString)) return false;
    if ( !Array.isArray(arrayString) ) return false;

    // const reversedArray = parsedArray.reverse(); 

    // let a;
    //   try {
    //     a = JSON.stringify(reversedArray);
    //   } catch {
    //     return false;
    //   }
    //   return a;
  } // end

  console.log(dummy);
  console.log(Array.isArray(dummy.companies));
  // console.log( isArrayTest([1,2.3]) );
  ///////////////////////////////////
  // 判断一个变量是否为数组，返回值有是和否
  console.log(Array.isArray([1,2,3])); // true
  console.log(!Array.isArray([1,2,3])); // false

} // end isArrayTestWrap