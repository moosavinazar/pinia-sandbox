import {defineStore} from "pinia";

const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 2
        }
    },

    getters: {
        // doubleCount: (state) => state.count * 2
        doubleCount: (state) => {
            return(value) => state.count * value;
        }
    },

    actions: {
        increment() {
            this.count++;
        },
        increment2(value) {
            this.count += value;
        }
    }
});

export default useCounterStore;