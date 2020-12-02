/*
 * 数组解构赋值
 * destructuring objects, vs arrays
 * Although destructuring in essense is the same - split object properties into multiple simple values (string, int, etc) or several objects which are simpler than the initial object
 * at it's core there is a major difference. Destructuring arrays doesn't require any information about the array, where as destructuring objects requires the user to know the properites of the object.
 */

export default function(){
  // destructuring array
  // 在数组解构这里有个类似的概念：不定元素（或者叫剩余元素）。它就是用...展开运算符把数组的多个元素一起赋值给一个变量
  let items = [1,2,3,4,5,6,7,8,9];
  let [a, ,...c] = items; // 空白处被省略，其他都给...， 必须是最后一个变量
  console.log(a); // prints 1
  console.log(c); // prints [3,4,5,6,7,8,9]

  // 不定元素（或者叫剩余元素）赋值
  let color02 = ['red', 'green', 'blue'];
  let [firstColor02, ...secondColor02] = color02;
  console.log(firstColor02); //red
  console.log(secondColor02); //['green', 'blue']

  // 实现数组的拷贝复制
  let color03 = ['red', 'green', 'blue'];
  let [...copiedColor] = color03;
  console.log(copiedColor);// ["red", "green", "blue"]
  console.log(color03.toString() === copiedColor.toString()); // true
  console.log(color03 == copiedColor); // false
  console.log(color03 === copiedColor); // fasle

  /*
  * a contains 1
  * we skip the second element
  * all other elements are stored in c, which is an array
  */

  // destructuring object you need proname : valueToAssignTo
  var {a: a1 = 10, b: b1 = 10} = {a: 5};
  console.log(a1);
  // a1 is 5 b1 is 10

  // You can also use destructuring to assign default values to object properties if they are undefined
  // 如果对象属性未定义，还可以使用析构来为它们分配默认值
  function foo( {c = 12, d = "foo"} = {} ) {
    console.log(d);
  }
  foo();

  // destructuring nested objects works for as much depth as you need it to, as long as you know the exact structure of the object:
  //对嵌套对象进行解构

  const user = {
    id: 12,
    foo : { 
        bar : { 
          baz : 111333,
          bbz : 14,
          bcz : 15
          },
        bbr : { 
          bdz : 111666,
          bez : 17,
          }
      }
  };

  // 赋值对象中某个特殊位置的值
  const { foo : { bar : { baz : mySecretValue } } } = user;
  const { foo : { bbr : { bdz : mySecretValue00 } } } = user;
  console.log(`My secret value: ${mySecretValue}`); // prints 111333
  console.log(`My secret value: ${mySecretValue00}`); // prints 111666

  let color = ['red', 'green', 'blue'];
  let [firstColor, secondColor] = color;
  console.log(firstColor); //red
  console.log(secondColor); //green

  let color00 = ['red', 'green', 'blue'];
  let [ , , thirdColor] = color00;
  console.log(thirdColor); // blue

  // 嵌套数组（多维数组）的解构
  let color01 = ['red', ['white', 'black'],'green', 'blue'];
  let [firstColor00, secondColor00] = color01;
  let [, [firstChildColor]] = color01;
  console.log(secondColor00); //["white", "black"]
  console.log(firstChildColor); //white

  // 对象和数组的混合解构
  let node = {
    personalInfo: {
        basicInfo: {
            name: {
                firstName: 'mike',
                lastName: 'deep'
              },
          }
      },
      levelRange: [1, 3]
  };
  
  let {
      personalInfo: {basicInfo: {name}},
      levelRange: [lowLevel]
  } = node;

  console.log(name.firstName); // mike
  console.log(lowLevel); // 1

}


