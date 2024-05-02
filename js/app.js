function loadData2(){
    const url = ('https://jsonplaceholder.typicode.com/todos/1');
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

}