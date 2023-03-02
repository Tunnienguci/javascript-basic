/* 
    Array Methods:
        -   forEach()
        -   every()
        -   some()
        -   find()
        -   filter()
        -   map()
        -   reduce()

*/


var course = [
    {
        id: 1,
        name: 'Java',
        coin: 310
    },
    {
        id: 2,
        name: 'JavaScript',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 310
    },
    {
        id: 4,
        name: 'HTML',
        coin: 410
    },
    {
        id: 5,
        name: 'NodeJS',
        coin: 610
    },
]



//forEach  : VN: Duyệt qua từng phần tử của mảng

course.forEach(
    function(course, index)
    {
        console.log(index, course);
    }
)

//every()  : VN: Kiểm tra tất cả các phần tử  ---> trả về kiểu boolean  --> phương thức giống lặp (Loop)
var isFree = course.every(
    function(course, index)
    {
        return course.coin === 0;
    }
)
console.log(isFree);

//some() : VN: Giống với every() nhưng some chỉ cần một điều kiện thỏa mãn là có thể trả lời true/false

//find

var isCheck = course.find(
    function(index, course)
    {
        return course.name === 'NodeJS';
    }
)

console.log(isCheck)



// map()

function courseHandler(course, index)   // Course ở đây là tham số truyền vào ở mảng
{
    return{
        id: course.id,
        name: `Couse Name: ${course.name}`,
        price: course.coin,
        index: index
    }
};

var newCourse = course.map(courseHandler);  //Thằng map này sẽ duyệt qua từng phần tử trong mảng ở trên.
// map sẽ trả về một Array[]



/* Reduce() */
var totalCoint = course.reduce((a,b) =>
    a + b.coin, 0    // a là biến tạm để lưu trữ cache  --- b là giá trị .coin --- 0 là số bắt đầu của biến tạm a
)