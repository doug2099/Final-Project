
// Define the object structure to represent a task
const Task = {
    id:0,
    name: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    status: ""
    };

    //Define a TaskManager class

    class TaskManager {
        constructor(task){
            this.task = task;
            
            this.taskList = [

                {
                    id:1,
                    name:'My first task',
                    description: 'My first task on the planner',
                    assignedTo: 'Douglas',
                    dueDate: '28/08/2020',
                    status: 'To-do',
                },
                {
                    id:2,
                    name: 'My second task',
                    description: 'My second task on the planner',
                    assignedTo: 'Douglas',
                    dueDate: '29/08/2020',
                    status: 'In Progress',

                },
            ];
        }
    }

    getAllTasks(){
        return this.taskList;
    }

    // getTasksWithStatus(status){

    // }

    addTask(){

    }

    deleteTask(id){

    }

    updateTask(id, status){

    }

    assignTask(id, assignedTo){

    }




