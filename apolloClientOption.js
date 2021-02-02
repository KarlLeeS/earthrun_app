const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://3785230b06ab.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 