import './App.css';

let globalid = 0;
function handleButtonClick(button) {
  button.innerHTML = '✅Done';
}
function Deletefunction(button) {
  const element = document.getElementById(button.id);
  element.remove();
}
function addTodo() {
  const title = document.getElementById('input1').value;
  const description = document.getElementById('input2').value;

  const div = document.createElement('div');
  const button = document.createElement('button');
  button.innerHTML = `Mark as Completed`;
  button.onclick = function () {
    handleButtonClick(button);
  }
  const Deletebutton = document.createElement('button');
  Deletebutton.innerHTML = `❌Delete`;

  Deletebutton.style.marginLeft = '10px';
  Deletebutton.onclick = function () {
    Deletefunction(button);
  }
  button.id = globalid;
  Deletebutton.id = globalid;
  div.id = globalid++;

  const titlePara = document.createElement('p');
  titlePara.textContent = `Title: ${title}`;

  const descPara = document.createElement('p');
  descPara.textContent = `Description: ${description}`;

  div.appendChild(titlePara);
  div.appendChild(descPara);
  div.appendChild(button);
  div.appendChild(Deletebutton);
  document.getElementById('todo-list').appendChild(div);
}
const divStyle = {
  border: '2px solid white',
  borderRadius: '10px',
  padding: '50px',
  position: 'absolute',
  top: '10%',
  left: '40%'
};
const itemStyle = {
  padding: '50px',
  position: 'absolute',
  top: '40%',
  left: '40%'
};
function App() {
  return (
    <>
      <div style={divStyle} id='Todos'>
        <input type='text' id='input1' placeholder='enter title' />
        <br /><br />
        <input type='text' id='input2' placeholder='enter description' />
        <br /><br />
        <button onClick={addTodo}>Submit</button>
      </div>
      <div style={itemStyle} id='todo-list'>

      </div>
    </>
  );
}

export default App;
