let check;

function insert(num) {
    if (check === 1) {
        document.getElementById('src').value = '';
        check = 0;
    }
    document.getElementById('src').value = document.getElementById('src').value + num;
}

function equal() {
    let result = document.getElementById('src').value;
    if (result) {
        document.getElementById('src').value = eval(result);
        check = 1;
    }
}
