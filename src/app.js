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
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },

        // in HTML input-description
        // :value="inputValue"
        // @input="inputChangeHandler"

        addNoteHandler() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
            }
        },

        delNoteHandler(idx) {
            this.notes.splice(idx, 1)
        },

        toUpperCase(item) {
            return item.toUpperCase()
        }
    },

    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2
        }
    },

    watch: {
        inputValue(value) {
            // validation
            if (value.length > 15) {
                this.inputValue = ''
            }
            console.log('watch :: value', value)
        }
    }
}

Vue.createApp(App).mount('#root')
