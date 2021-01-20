const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://6be3301e6e5f.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 