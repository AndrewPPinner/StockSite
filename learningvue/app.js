
const app = Vue.createApp({
    data() {
        return {
            ticker: '',
            tickerUpper: '',
            results: '',
            dayChange: ''
        }
    },
    methods: {
        getPrice(ticker) {
            axios
                .get("https://finnhub.io/api/v1/quote?symbol=" + ticker.toUpperCase() + "&token=c409dcaad3iaf2seehk0")
                .then(response => (this.results = "$" + response.data.c, this.dayChange = "$" + response.data.d, this.tickerUpper = ticker.toUpperCase(),console.log(response)))
                .catch(error => console.log(error))
        }
    }

})

app.mount('#app')