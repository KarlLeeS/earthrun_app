const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://d38a0b36c485.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 