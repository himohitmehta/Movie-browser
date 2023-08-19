import { TMDB_ACCESS_TOKEN } from "../constants/TMDB";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
	},
};
const url =
	"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export async function getMovies(query) {
	const response = await fetch(url, options);

	let movies = await response.json();

	if (!movies) movies = [];
	if (query) {
		movies = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
			options,
		);
		return movies.json();
	}
	return movies;
}

export async function getMovieDetails(query) {
	const url = `https://api.themoviedb.org/3/movie/${query}?language=en-US`;

	const response = await fetch(url, options);

	let movie = await response.json();

	return movie;
}