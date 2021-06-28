function del(student){
    let students = model.students[student];
    
    if( students.isChecked == false){
        return students.isChecked = true;
    }
    else {
        return students.isChecked = false;
    }
}

function delTeacher(teacher){
    let teach = model.teachers[teacher];
    if( teach.isChecked == false){
        return teach.isChecked = true;
    }
    else {
        return teach.isChecked = false;
    }
   
}


function remove(){
    const studentsToDelete = model.students;
    studentsToDelete.filter( x => x.isChecked === true)
        .forEach(x  => 
        studentsToDelete.splice(studentsToDelete.indexOf(x), 1));

      showStudentsTable();
}
function removeTeacher(){
    const teachersToDelete = model.teachers;
    teachersToDelete.filter( x => x.isChecked === true)
        .forEach(x  => 
        teachersToDelete.splice(teachersToDelete.indexOf(x), 1));

        showTeacherTable()
}


function move(){
    model.inputView = `<input type="text" oninput="model.inputs.info = this.value" placeholder="legg til info"/>
    <button onclick="leggtilInfo()"> legg til </button> `
 
    showStudentsTable();
}
function leggtilInfo(){
    const studentsToPuch = model.students;
    studentsToPuch.filter( x => x.isChecked === true)
        .forEach(x  => 
        model.teachers.push({
            name: x.name, 
            isChecked: false,
            info: model.inputs.info,
        })
    );
    model.inputView= '';
    model.inputs.info = '';
        remove();
}

function editModulToTeacher(i){

    model.inputView = `<input type="text" oninput="model.inputs.info = this.value" placeholder="Endre modul til ${model.teachers[i].name}"/>
    <button onclick="changeModul(${i})"> endre </button> `
    showTeacherTable()
}
function changeModul(teachInd){
    model.teachers[teachInd].info = model.inputs.info
    model.inputView = '';
    model.inputs.info = '';
    showTeacherTable()
}

function changeModulStudent(indexStudent){
   
    model.inputView = `<input type="text" oninput="model.inputs.info = this.value" placeholder="Endre modul til ${model.students[indexStudent].name}"/>
    <button onclick="enterNewModulStudent(${indexStudent})"> Endre modul </button> `
    showStudentsTable()
}
function enterNewModulStudent(indexStudent){
    model.students[indexStudent].module = model.inputs.info
    model.inputView = '';
    model.inputs.info = '';
    showStudentsTable();
}

