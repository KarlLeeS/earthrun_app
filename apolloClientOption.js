const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://dc9dc511db49.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 