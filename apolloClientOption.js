const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://d50343f9e5a8.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 