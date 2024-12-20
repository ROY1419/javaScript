// singleton achtecture

// const instaObject = new Object()  this is singleton object this create only one instance.

const instaObject = {} //this is not a singleton object this create multipl objects

instaObject.id ='12345'
instaObject.nmae = 'shubham'
instaObject.isLoggedIn = false

// console.log(instaObject);

const regularObject ={
    email : "shbuham@gmail.com",
    fullNmae : {
        userfullname : {
            firstname : 'shubham',
            lastname : 'roy'
        }

    }
}//? question mark is for asking is in or not
// console.log(regularObject.fullNmae?.userfullname); 
const obj1 ={1: 'q', 2:'4' }
const obj2 ={3: true, 5: null}
const obj4 ={3: 'shu', 5: 'roy '}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2, obj4)
// const obj3 = Object.assign(...obj1,...obj2,...obj4) (...) => this is spred opertor, this use to combine a array
// console.log(obj3);

const user = [
    {id: 1, email: "shubham@gmail"},
    {phone: 9897655, landline: 066-098},
    {address: "suart-vesu", officeAddress : 'gujrat'}
] // array of objects

user[1].email
// console.log(instaObject); typeof objects => { id: '12345', nmae: 'shubham', isLoggedIn: false } => object
// console.log(Object.keys(instaObject)); typeof objects => [ 'id', 'nmae', 'isLoggedIn' ] => array
// console.log(Object.values(instaObject)); typeof objects => [ '12345', 'shubham', false ]  => array
// console.log(Object.entries(instaObject)); typeof objects => [ [ 'id', '12345' ], [ 'nmae', 'shubham' ], [ 'isLoggedIn', false ] ]   => array
// console.log(instaObject.hasOwnProperty('isLoggedIn')); => true
// console.log(instaObject.hasOwnProperty('isLogged')); => false

//de-structureing

const course ={
    coursename : 'js in hindi',
    price : '688',
    courseInstructor : 'shubham'
}
// course.courseInstructor()
const {courseInstructor : Instructor} = course
// console.log(Instructor);

// const navbar = ({company}) => {} ,this is uising in react and working as a de-structuring => {company}
// navbar(company='infosys')
// console.log(navbar);
// {
//     coursename : 'js in hindi',
//     price : '688',   {} => is simply JSON
//     courseInstructor : 'shubham'
// }
// [
//     {},
//     {}, => array type json data 
//     {}
// ]