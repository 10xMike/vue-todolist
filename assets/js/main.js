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
            this.tasks.push(this.newTask)
            this.newTask = ''
        },
        removeTask(index){
            console.log('Remove task n.' + index);
            this.tasks.splice(index, 1);
        },        
    },
    mounted(){
        document.addEventListener('keyup', (e) =>{
            if (e.key === 'Enter'){
                this.addTask();
            }
        });
    }
});