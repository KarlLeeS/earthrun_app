const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://eba7d8794830.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions;