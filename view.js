let appDiv = document.getElementById('app');
view();
function view(){

appDiv.innerHTML = `
<button onclick="showStudentsTable()"> Oversikt over Studenter </button>
<button onclick="showTeacherTable()"> Oversikt over Lærere </button>

`;
}
function showStudentsTable(){
 
        let html = `<button onclick="view()"> Tilbake </button>
        <table>
            <tr><th> marker</th> <th> Studenter</th><th>Modul</th></tr>
              
                ${showStudents()}`;
            
        html += `</table>
             ${model.inputView}
            <button onclick="remove()">slett</button>
            ${model.button}`;
    appDiv.innerHTML = html
 }

 function showTeacherTable(){
    html = `<button onclick="view()"> Tilbake </button>
    <table>  <tr><th> marker</th> <th> Lærere</th></tr>
    ${showTeachers()}
    </table>
    ${model.inputView}
    <button onclick="removeTeacher()">slett</button>
    `;
    
    appDiv.innerHTML = html;
}

function showStudents(){
    let html = '';
    for(let i = 0; i < model.students.length; i ++){
      
        html += `<tr>
            <td><input type="checkbox" onclick="del(${i})"  /></td>
            <td>${model.students[i].name}</td>
            <td onclick="changeModulStudent(${i})">${model.students[i].module}</td>
        </tr>`
    }
    return html;
}

function showTeachers(){
    let html = '';
    for(let i = 0; i < model.teachers.length; i ++){
      
        html += `<tr>
        <td><input type="checkbox" onclick="delTeacher(${i})"  /></td>
        <td onclick="editModulToTeacher(${i})" class="tooltip" >${model.teachers[i].name}
        <span class="tooltiptext">${model.teachers[i].info}</span></td>  
        </tr>`
    }
    return html;
}


