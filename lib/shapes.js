
const shapes = [
    {
        name: 'square',
        text: ` <svg version="1.1"  xmlns="http://www.w3.org/2000/svg">
                                    <rect x="90" y="90" width="200" height="200" fill='${shapeColor}' stroke="black" stroke-width='1'/>
                                    <text x="190" y="210" font-size="100" text-anchor="middle" fill='${textColor}'>'${title}'</text>
                                </svg>`,
    },
    {
        'circle': '<circle cx="25" cy="75" r="20"/>',
    },
    {
        name: 'triangle',
        message: `<svg id="triangle" xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="50%" height="50%" viewBox="0 0 100 100">
                                        <polygon points="50 15, 100 100, 0 100"/>
                     </svg>`,
    },
]






// var keys = Object.values(questions)

// //console.log(keys)

// var textColor = keys[1].input
// var shapeColor = keys[3]
// var title = keys[0]
// // let shapes = shape(function () {
// //     console.log('looking good')
// //     return
// // })
// // shapes.then(({
// //     title,
// //     textColor,
// //     shapeColor,
// // }) => {

// const shapes = [
//     {
//         name: 'square',
//         text: ` <svg version="1.1"  xmlns="http://www.w3.org/2000/svg">
//                                 <rect x="90" y="90" width="200" height="200" fill='${shapeColor}' stroke="black" stroke-width='1'/>
//                                 <text x="190" y="210" font-size="100" text-anchor="middle" fill='${textColor}'>'${title}'</text>
//                             </svg>`,
//     },
//     {
//         'circle': '<circle cx="25" cy="75" r="20"/>',
//     },
//     {
//         name: 'triangle',
//         message: `<svg id="triangle" xmlns="http://www.w3.org/2000/svg" 
//                     xmlns:xlink="http://www.w3.org/1999/xlink" width="50%" height="50%" viewBox="0 0 100 100">
//                                     <polygon points="50 15, 100 100, 0 100"/>
//                  </svg>`,
//     },
// ]






// console.log(shapeColor)
module.exports = shapes;