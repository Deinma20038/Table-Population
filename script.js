let table = document.querySelector('#table');


fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response) {
    return response.json();
})
.then(function(data){
   let rowsAPI = "<tr>";
   data.forEach((e) => {
       rowsAPI += `<tr>
        <td>${e.userId}</td>
        <td>${e.id}</td>
        <td>${e.title}</td>
        <td>${e.completed}</td>
        </tr>`;
   });
    table.innerHTML += rowsAPI;
   return data;
})
.catch(function(error) {
    console.log(error);
    return error;
});



