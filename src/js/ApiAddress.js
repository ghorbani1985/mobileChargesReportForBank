class ApiAddress {
    constructor(){
        this.url = "https://api.nasa.gov/planetary/apod";
        this.apiKey = "jhCI4cTeo66JGjuWwD4cDASWcn9HeUyRtFt7OnQH";
        this.count = 12;
    }
    getApiURL = () => `${this.url}?api_key=${this.apiKey}&count=${this.count}`;
}