export default function(){
  // for
  const arr = [1, 2, 3, 4];
  for(let i = 0; i < arr.length; i += 1){
    console.log(arr[i]); // 1 2 3 4
  }

  // for in
  for(let i in arr) {
    // console.log(i); // for in 的i是索引 0 1 2 3
    console.log(arr[i]);
  }

  // for of
  for(let i of arr) {
    console.log(i);
  }



}