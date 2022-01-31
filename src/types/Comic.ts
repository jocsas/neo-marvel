type Comic = {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    price: number;
    amount: number;
 }
 
 export default Comic;
 