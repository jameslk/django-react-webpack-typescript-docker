// import * as React from 'react';
// import * as ReactDom from 'react-dom';
//
// class Hello extends React.Component<any, any> {
//     render() {
//         return (
//             <h1>
//                 Hello, React!
//             </h1>
//         )
//     }
// }
//
// ReactDom.render(<Hello />, document.getElementById('container'));

async function test() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

(async () => {
    alert('test 1');
    await test();
    alert('test 2');
})();
