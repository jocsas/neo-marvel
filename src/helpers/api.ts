import  api  from '../services/api';
import Comic from '../types/Comic';


export async function getComics() {


// Obtendo uma lista de quadrinhos
   const { data } = await api.get('comics');
   const fetchedComics = data.data.results;

   let comicList: Comic[] = [];
   for (let comic of fetchedComics.keys()) {
      const newComic = await setComicInfo(fetchedComics[comic]);
      comicList.push(newComic);
   }
   return comicList;
}

export async function getComic(id: string){
    const { data } = await api.get(`comics/${id}`)
    const fetchedComic = data.data.results;

    return fetchedComic;
}

/**
 * Função responsável por inserir as informações no array de quadrinhos
 */
async function setComicInfo(comic: Comic) {
   
    // Extraindo os valores do quadrinho recebido via requisição
   const {
      id,
      title,
      description,
      thumbnail,
   }: any = comic;

   // Setando preço randomico. Alguns vem com preço zerado..

   const price = parseFloat(((Math.random() * (20 - 10)) + 10).toFixed(2));

   const newComic: Comic = {
       id,
       title,
       description,
       thumbnail,
       price,
       amount: 0
   }

   return newComic;

}