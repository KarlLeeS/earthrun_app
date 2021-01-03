const apolloClientOptions = {
    uri: 
        process.env.NODE_ENV==="development"
        ? "https://5206e6240535.ngrok.io"
        : "https://earthrunnew.herokuapp.com"
};
export default apolloClientOptions;