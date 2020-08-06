// Define the object structure to represent a task
    class Task {
        constructor(id, name, description, assignedTo, date, status) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.assignedTo = assignedTo;
            this.date = date;
            this.status = status;
        }
    }

     //Define a TaskManager class

    class TaskManager {
      constructor() {
          this.currentId = 1;
        this.tasks = [];
      }
      getAllTasks() {
        return this.tasks;
      }
      getTasksByStatus() {}
      addTask(name, description, assignedTo, dueDate, status) {
        const task = new Task(
          `task${this.currentId++}`,
          name,
          description,
          assignedTo,
          dueDate,
          status
        );
        //push new task onto the tasks array
        this.tasks.push(task);
      }
      deleteTask(id) {}
      updateTask(id) {}
      assignTask(task) {}
    }