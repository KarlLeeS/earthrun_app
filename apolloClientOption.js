const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://f5dfa7c5280f.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions;