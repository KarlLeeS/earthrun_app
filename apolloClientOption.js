const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://88b5a12f7021.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 