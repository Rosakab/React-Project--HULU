const key= 'a1de25809997e4e9dde114e70f87386e'


const requests={
   requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
   requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US` ,
   requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US` ,
   requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`, 
}

export default requests;
