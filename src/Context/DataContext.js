import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { apiKey } from "./apiKey";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const genre = [
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
    ]

    const [discoverTV, setDiscoverTV] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [selectedGenre, setSelectedGenre] = useState({
        id: 878,
        name: "Science Fiction"
    })
    const [genreMovie, setGenreMovie] = useState([])

    const getDiscovereTV = async () => {
        const fetchedDiscoverTV = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
        setDiscoverTV(fetchedDiscoverTV?.data?.results.splice(0,4))
    }

    const getPopularMovies = async () => {
        const fetchedPopularMovies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        setPopularMovies(fetchedPopularMovies?.data?.results.splice(0,8))
    }

    const getGenreMovie = async (genreID) => {
        const fetchedGenreMovie = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID ?? 878}`)
        setGenreMovie(fetchedGenreMovie?.data.results.splice(0,8))
    }

    useEffect(() => {
        getDiscovereTV();
        getPopularMovies();
        getGenreMovie();
    }, [])

    useEffect(() => {
        getGenreMovie(selectedGenre.id)
    }, [selectedGenre])

    return <DataContext.Provider value={{ discoverTV, popularMovies, genre, genreMovie, setSelectedGenre, selectedGenre }}>
        {children}
    </DataContext.Provider>
}

const useData = () => useContext(DataContext)

export { useData, DataProvider }