const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ?"https://ce5008032e92.ngrok.io"
        :"https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions; 