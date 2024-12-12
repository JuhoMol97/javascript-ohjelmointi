'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i < 3; i++){
  let data = document.createElement('option')
  data.innerHTML = students[i].name
  data.setAttribute('value', students[i].id)
  document.getElementById('target').appendChild(data)
}
