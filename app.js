//create vue
const app = Vue.createApp({
    //variables
    data() {
        return {
            crypto: '',
            cryptoUpper: '',
            cResults: '',
            ticker: '',
            tickerUpper: '',
            sResults: '',
            dayChange: ''
        }
    },
    //functions
    methods: {
        //on button click get "ticker" from input box and push to axios to call Stock api
        getPrice(ticker) {
            axios
            //call stock api
                .get("https://finnhub.io/api/v1/quote?symbol=" + ticker.toUpperCase() + "&token=c409dcaad3iaf2seehk0")
                //function to alter response data from api
                .then(response => (this.sResults = "$" + response.data.c, this.dayChange = "$" + response.data.d, this.tickerUpper = ticker.toUpperCase(),console.log(response)))
                //log any errors in console
                .catch(error => console.log(error))
        },
        // on button click use cryto from user input to call Crytpo api
        getCrypto(crypto) {
            axios
            //call api
                .get("https://api.coingecko.com/api/v3/simple/price?ids=" + crypto.toUpperCase() + "&vs_currencies=USD")
                //function to alter response data from api
                .then(response => (console.log(response), this.cryptoUpper = crypto.toUpperCase(), this.cResults = "$" + response.data[crypto.toLowerCase()].usd))
                //output any errors
                .catch(error => console.log(error))
        }
    }

})
// where to mount Vue(what Vue can control)
app.mount('#app')