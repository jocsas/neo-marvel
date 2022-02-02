import  api  from '../services/api';
import Comic from '../types/Comic';


export async function getComics() {


// Obtains a Comics list
   const { data } = await api.get('comics?format=comic');
   const fetchedComics = data.data.results;

   let comicList: Comic[] = [];
   for (let comic of fetchedComics.keys()) {
      const newComic = await setComicInfo(fetchedComics[comic]);
      comicList.push(newComic);
   }
   return comicList;
}

// Obtains a Comic by id
export async function getComic(id: string){
    const { data } = await api.get(`comics/${id}`)
    const fetchedComic = data.data.results;

    return fetchedComic;
}


async function setComicInfo(comic: Comic) {
   
    // Extract values from api
   const {
      id,
      title,
      description,
      thumbnail,
   }: any = comic;

   // Generate random price, cause some comics dont send price

   const price = parseFloat(((Math.random() * (20 - 10)) + 10).toFixed(2));
   
   // Generate aleatory number for show if is a Rare Item or not
   const rare = Math.floor(Math.random() * 10);
   

   const newComic: Comic = {
       id,
       title,
       description,
       thumbnail,
       price,
       amount :0,
       rare,

   }

   return newComic;
}