let alltask = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []

const viewTask = () => {

    let tasks = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []
    let tbl = "";
    tasks.map((val, index) => {
        tbl += `
                    <tr>
                        <td>${val.taskid}</td>
                        <td>${val.task}</td>
                        <td>
                           <button class="btn btn-danger" onclick="deleteTask(${val.taskid})">Delete</button>
                           <button class="btn btn-info" onclick="edittask('${val.taskid}','${val.task}')">edit</button>

                           
                        </td>
                        
                        <td>
                        <select>
                           <option>-----select----</option>
                           <option value="success">success</option>
                              <option value="panding">panding</option>
                                 <option value="cancel">cancel</option>
                           </select></td>
                    </tr>
                `
    })
    document.getElementById('alltask').innerHTML = tbl;
}
viewTask();

const deleteTask = (taskid) => {
    let tasks = JSON.parse(localStorage.getItem('alltask'));
    tasks = tasks.filter(task => task.taskid !== taskid);
    localStorage.setItem('alltask', JSON.stringify(tasks));
    viewTask();
}
const allclear = () => {
    localStorage.removeItem('alltask');
    viewTask();
};

const edittask = (id, task) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";
    // let alltask = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []
    document.getElementById('task').value = task
    document.getElementById('editid').value = id
    viewTask();
}

const addTask = () => {
    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";
    let task = document.getElementById('task').value;
    let obj = {
        taskid: Math.floor(Math.random() * 10000000),
        task: task
    }

    let tasks = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []

    let dup = tasks.find(val => val.task == task);

    if (dup) {
        alert("Task is already exists");
        document.getElementById('task').value = ""
        return false;
    }

    let newdata = [
        ...tasks, {
            taskid: obj.taskid,
            task: obj.task
        }
    ];
    localStorage.setItem('alltask', JSON.stringify(newdata));
    alert("record add")
    document.getElementById('task').value = ""
    viewTask();

    // if (localStorage.getItem('alltask') == null || localStorage.getItem('alltask') === undefined) {
    //     alltask.push(obj);
    //     localStorage.setItem('alltask', JSON.stringify(alltask));
    //     alert("Task successfully add");
    //     document.getElementById('task').value = "";
    //     viewTask();
    // } else {
    //     let tasks = JSON.parse(localStorage.getItem('alltask'));
    //     tasks.push(obj);
    //     localStorage.setItem('alltask', JSON.stringify(tasks));
    //     alert("Task successfully add");
    //     document.getElementById('task').value = "";
    //     viewTask();

    // }

}
const updateTask = () => {
    let taskid = document.getElementById('editid').value;
    let task = document.getElementById('task').value;

    let tasks = JSON.parse(localStorage.getItem('alltask'));
    let up = tasks.map((val) => {
        if (val.taskid == taskid) {
            val.task = task;
        }
        return val;
    });
    localStorage.setItem('alltask', JSON.stringify(up));
    alert("Task successfully updated");
    document.getElementById('task').value = "";
    document.getElementById('editid').value = "";
    viewTask();
}

const status = () => {
    let status = document.getElementById('status').value;

    if (status == "panding") {
        document.getElementById('status').value = "panding";
    }
    else if (status == "success") {
        document.getElementById('status').value = "success";
    }
    else if (status == "cancel") {
        document.getElementById('status').value = "cancel";
    }
    
    // Call viewTask function after updating status
    viewTask();
}




