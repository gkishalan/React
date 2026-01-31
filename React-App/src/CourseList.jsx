import Course from './Course'
import fullstack from './assets/fulllstack.webp'
import flutter from './assets/flutter.webp'
import python from './assets/python.webp'

function CourseList(){

    const courses = [
        {
            name : "HTML Full Course",
            price : 499,
            image : fullstack,
            rate : "5",
        },
        {
            name : "Flutter",
            price : 499,
            image : flutter,
            rate : "4",
        },
        {
            name : "Python",
            price : 199,
            image : python,
            rate : "5",
        },
    ]

    courses.sort( (x,y) => y.price - x.price);

    const vfmCourses = courses.filter((course) => course.price < 200);

    const coursesList = vfmCourses.map( 
    (course , index) => 
    <Course key = {index}
    name = {course.name} 
    price = {course.price} 
    image = {course.image} 
    rate = {course.rate}/>)

    return(
        <>
        {coursesList}
        </>
    );
}

export default CourseList;