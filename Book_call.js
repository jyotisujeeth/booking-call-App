let submit = document.getElementById('registration');
let name = document.getElementById('name');
let email = document.getElementById('email');
let ph_no = document.getElementById('ph_no');
let time = document.getElementById('time');
let date = document.getElementById('date');
submit.addEventListener('submit', saveToLocalStorage);

function saveToLocalStorage(e) {
    e.preventDefault();
    // window.localStorage.clear();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let ph_no = e.target.ph_no.value;
    let time = e.target.time.value;
    let date = e.target.date.value;

    // localStorage.setItem('Name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('Phone', ph_no);
    // localStorage.setItem('Time', time);
    // localStorage.setItem('Date', date);

    let obj = { name, email, ph_no, time, date }
    // localStorage.setItem(name, JSON.stringify(obj));
    // showOn(obj);
    document.getElementById('registration').reset();
    axios.post('https://crudcrud.com/api/e3c01cfa2e1d4142a44e178474dbf250/appointmentData', obj)
        .then((response) => {
            showOn(response.data);
            console.log(response);
        })
        .catch((err) => {
            // if(err.response){
            //     console.log(err.response.data);
            //     console.log(err.response.status);
            //     console.log(err.response.headers);
            // }
            console.log(err);
        })

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/e3c01cfa2e1d4142a44e178474dbf250/appointmentData')
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                showOn(res.data[i]);
            }
            console.log(res)
        })
        .catch((err) => console.log(err));

    // axios.delete('https://crudcrud.com/api/462ab6ec47224b179652985cc50a97aa/appointmentData')
    //     .then((res) => showOn(res))
    //     .catch((err) => showOn(err));
});

function showOn(obj) {
    let parentElement = document.getElementById('user');
    let childElement = document.createElement('li');
    childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.ph_no + ' - ' + obj.date + ' - ' + obj.time;
    parentElement.appendChild(childElement);
    // console.log(childElement);

    const dltbtn = document.createElement('input');
    dltbtn.type = 'button';
    dltbtn.value = 'Delete';
    dltbtn.className = 'button';
    childElement.appendChild(dltbtn);

    dltbtn.onclick = () => {
        localStorage.removeItem(obj.name);
        parentElement.removeChild(childElement);
    }

    const edtbtn = document.createElement('input');
    edtbtn.type = 'button';
    edtbtn.value = 'Edit';
    edtbtn.className = 'button-3';

    edtbtn.onclick = () => {
        localStorage.removeItem(obj.name);
        parentElement.removeChild(childElement);

        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
        document.getElementById('ph_no').value = obj.ph_no;
        document.getElementById('time').value = obj.time;
        document.getElementById('date').value = obj.date;
    }
    childElement.appendChild(edtbtn);
}