const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://dd84a5d7f326.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions;