// VUE TODOLIST

/* Create una todo list usando VueJS. Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS. Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Inoltre L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera. Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari. Consultate la documentazione e se siete bloccati, aprite un ticket. */

const app = new Vue({
  el: "#app",
  data: {
    logo: "./assets/img/logo.png",
    newTask: "",
    error: "",
    tasks: ["Impara HTML", "Impara CSS", "Impara JS"],
    completedTasks: [],
    trash: [],
  },
  methods: {
    addTask() {
      if (this.newTask.length > 3) {
        this.tasks.unshift(this.newTask);
        this.newTask = "";
        this.error = "";
      } else {
        this.error = "Inserisci almeno 3 caratteri";
      }
    },
    removeTask(index, task) {
      console.log("Remove task n." + index);
      this.tasks.splice(index, 1);
      this.trash.unshift(task);
    },
    taskCompleted(index, task) {
      this.completedTasks.unshift(task);
      this.tasks.splice(index, 1);
    },
    updateTask() {
      alert("Succesfully updated!");
    },
    restoreTask(index, task) {
      this.tasks.unshift(task);
      this.completedTasks.splice(index, 1);
    },
    emptyTrash() {
      const destroy = confirm("Are you sure you want to empty the bin?");
      if (destroy) {
        this.trash = [];
      }
    },
    restoreTrashedTasks(index, task) {
      this.tasks.unshift(task);
      this.trash.splice(index, 1);
    },
  },
  mounted() {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.addTask();
      }
    });
  },
});
