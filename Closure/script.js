// function adder(num){

//     function add(b){
//         console.log(num + b);
//     }
//     return add;
// }

// const addTo5 = adder(5);

// addTo5(2)
  

const myName = document.getElementById('my-name');
const btn = document.getElementById("my-btn");

function makeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize = `${size}px`;
    }
    return changeSize
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size40 = makeTextSizer(40);


btn.addEventListener('click', size12 );