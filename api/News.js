import { news_api_key} from '../config.json';


export async function getNews(){

  
try {
    let NewsData = await fetch(`https://newsapi.org/v2/everything?q=health&apiKey=${news_api_key}`);
    let result = await NewsData.json();
    //pollutionData = null;
    console.log("News", result);
    return result;
    
} catch (error) {
    throw error;
    
}

};
