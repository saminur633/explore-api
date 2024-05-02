function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(res => res.json())
     .then(data => displayUsers(data))
}
function displayUsers(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}