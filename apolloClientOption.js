const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://2704cc230bce.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions;