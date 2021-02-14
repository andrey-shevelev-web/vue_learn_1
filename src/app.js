const App = {
    data() {
        return {
            title: 'List of notes',
            placeholderString:'Input the name of note',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },

        addNoteHandler() {
            this.notes.push(this.inputValue)
        },

        delNoteHandler(idx) {
            this.notes.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#root')
