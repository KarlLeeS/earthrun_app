const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://089bb7314736.ngrok.io"
        :"https://089bb7314736.ngrok.io"
        // :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 