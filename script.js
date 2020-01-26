let check;
let stringArray = document.getElementById('src');

let insert = (num) => {
    if (check === 1) {
        stringArray.value = '';
        check = 0;
    }
    stringArray.value = stringArray.value + num;
};

let equal = () => {
    let result = document.getElementById('src').value;
    if (result) {
        stringArray.value = eval(result);
        check = 1;
    }
};
