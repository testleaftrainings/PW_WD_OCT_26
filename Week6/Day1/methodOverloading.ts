class BrowserNew{

    loadApplication(url:string):void
    loadApplication(url: string, browserName : string): void

    loadApplication(url:string,browserName?:string){
if(browserName){
    console.log(`launch the ${url} in the browser ${browserName}`);
    
}else{
    console.log('launch the ', url);
    
}
    }
}


let br = new BrowserNew()

br.loadApplication('google.com')
br.loadApplication('google.com','chrome')