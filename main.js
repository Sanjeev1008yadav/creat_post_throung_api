// Single Element
// const form = document.getElementById('my-form');
// console.log(form);
//  console.log((document.querySelector('h1')));

 // multiple element 
//  console.log(document.querySelectorAll('.item'));
//  console.log(document.getElementsByClassName('item'));
//  console.log(document.getElementsByTagName('li'));

// const ul = document.querySelector('.item');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent ='Hello';
// ul.children[1].innerText='sanjeev';
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log(e.target.id);
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('.item').lastElementChild.innerHTML = '<h1>Hello</h1>';
    

// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);
function onSubmit(e){
    e.preventDefault();
    // localStorage.getItem('name' , nameInput);
    //     localStorage.getItem('email', emailInput);
    // var newName =document.getElementById('name').value;
    // console.log(newName);
    // var newEmail = document.getElementById('email').value;
    // console.log(newEmail);
    // localStorage.getItem('newName','newName');
    // localStorage.getItem('newEmail' , 'newEmail');


 if(nameInput.value === '' || emailInput.value === '') {
    // msg.innerHTML = 'sky';
        // alert('please enter fields')
        // localStorage.getItem('name' , nameInput);
        // localStorage.getItem('email', emailInput);

        // clear fields
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // localStorage.setItem('name' , 'nameInput');
        // localStorage.setItem('email', 'emailInput');

        

        userList.appendChild(li);
        // localStorage.setItem('name' , nameInput.value);
        // localStorage.setItem('email', emailInput.value);

        // const deleteButton = document.createElement('input')
        // deleteButton.type = "Button"
        // deleteButton.value = 'Delete'
        // li.appendChild(deleteButton)
        // deleteButton.onclick = () => {
        //     localStorage.removeItem(obj.emailInput)
            

        
        // }
        const obj = {
            
            nameInput:nameInput.value,
            emailInput:emailInput.value,
            
            

            
        }
        axios.post("https://crudcrud.com/api/0c160110ffdc4e24b71078eb33e0921d/appointmentData" ,obj).then((response)=>{
            // showNewUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err)=>{
            // document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong</h4>"
            console.log(err)
        })
        // localStorage.setItem( obj.emailInput , JSON.stringify(obj));
      
      
        // clear fields
        
            
        nameInput.value = '';
        emailInput.value = '';
    
    const deleteButton = document.createElement('input')
        deleteButton.type = "Button"
        deleteButton.value = 'Delete'
        li.appendChild(deleteButton)
        // userList.appendChild(li)
        deleteButton.onclick = () => {
            localStorage.removeItem(obj.emailInput)
            userList.removeChild(li);

           
           
    //  const editButton = document.createElement('input')
    //         editButton.type = "Button"
    //         editButton.value = 'edit'
    //         li.appendChild(editButton)        
       
       
       
        }
    
        const editButton = document.createElement('input')
        editButton.type = "Button"
        editButton.value = 'edit'
        li.appendChild(editButton)        
        editButton.onclick = () => {
            localStorage.removeItem(obj.emailInput)
            userList.removeChild(li);
            document.getElementById('name').value = obj.nameInput
            document.getElementById('email').value = obj.emailInput

        }

        // li.appendChild(deleteButton)
        // li.appendChild(editButton)
        // userList.appendChild(li)

            

        
        }


}
