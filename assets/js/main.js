// Vue Todolist
/*  */
const app = new Vue({
    el: '#app',
    data:{
        logo: './assets/img/logo.png',
        newTask: '',
        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS',
        ]
    },
    methods: {
        addTask(){
            this.task.push(this.newTask)
            this.newTask = ''
        },
        removeTask(index){
            console.log('Remove task n.' + index);
            this.tasks.splice(index, 1);
        }
    }
});