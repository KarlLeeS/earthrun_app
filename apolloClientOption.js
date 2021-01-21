const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://496d556de7a8.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 