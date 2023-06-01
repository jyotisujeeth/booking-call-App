let submit = document.getElementById('registration');
let name = document.getElementById('name');
let email = document.getElementById('email');
let ph_no = document.getElementById('ph_no');
let time = document.getElementById('time');
let date = document.getElementById('date');
submit.addEventListener('submit', saveToLocalStorage);


function saveToLocalStorage(e) {
    e.preventDefault();
    // console.log('fdhnkj')
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

    const obj = { name, email, ph_no, time, date };
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showUserOnScreen(obj);

    // document.getElementById('registration').reset();
    axios.post('https://crudcrud.com/api/e3c01cfa2e1d4142a44e178474dbf250/data', obj)
        .then((response) => {
            showUserOnScreen(response.data);
            // console.log(response);
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

window.addEventListener('DOMContentLoaded', () => {
    axios
        .get('https://crudcrud.com/api/e3c01cfa2e1d4142a44e178474dbf250/data')
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                showUserOnScreen(res.data[i]);
            }
            console.log(res);
        })
        .catch((err) => console.log(err));
    //     const localStorageObj = localStorage;
    //     const localstoragekeys = Object.keys(localStorageObj)

    //     for (var i = 0; i < localstoragekeys.length; i++) {
    //         const key = localstoragekeys[i]
    //         const userDetailsString = localStorageObj[key];
    //         const userDetailsObj = JSON.parse(userDetailsString);
    //         showUserOnScreen(userDetailsObj)
    //     }

})

function showUserOnScreen(user) {
    // user = {
    //     _id: '',
    //     name: '',
    //     email: '',
    //     ph_no: '',
    //     time: '',
    //     date: ''
    // }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('ph_no').value = '';
    document.getElementById('time').value = '';
    document.getElementById('date').value = '';

    // console.log(localStorage.getItem(user.email));

    if (localStorage.getItem(user.email) !== null) {
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('user');

    const childNode = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.ph_no} - ${user.time} - ${user.date}
                                    <button onclick=deleteUser('${user._id}') class = 'button'> Delete User </button>
                                    <button class='button-3' onclick=editUserDetails('${user.email}','${user.name}','${user.ph_no}','${user.time}','${user.date}','${user._id}')>Edit User </button>
                                 </li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode;
    // console.log(childNode);
}
//edituser
function editUserDetails(userID) {
    // axios.put(`https://crudcrud.com/api/76ec0e024791462a91112d0d0db67fb2/data/${userID}`, {
    //     title: 'New todo',
    //     completed: false
    // })
    //     .then((res) => showUserOnScreen(res))
    //     .catch((err) => console.log(err));

        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('ph_no').value = ph_no;
        document.getElementById('time').value = time;
        document.getElementById('date').value = date;

        deleteUser(userID);
}



//deleteuser
function deleteUser(userID) {
    axios
        .delete(`https://crudcrud.com/api/e3c01cfa2e1d4142a44e178474dbf250/data/${userID}`)
        .then((res) => {
            removeUserFromScreen(userID);
        })
        .catch((err) => {
            console.log(err);
        })

    // console.log(email);
    // localStorage.removeItem(email);
    // removeUserFromScreen(email);
}

function removeUserFromScreen(userID) {
    const parentNode = document.getElementById('user');
    const childNodeTobeDeleted = document.getElementById(userID);

    if (childNodeTobeDeleted) {
        parentNode.removeChild(childNodeTobeDeleted);
    }
}