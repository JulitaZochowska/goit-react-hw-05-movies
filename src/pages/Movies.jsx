import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'utils';

export const Movies = () => {
  const movies = getMovies(); //lista moviesow
  const [searchParams, setSearchParams] = useSearchParams(); //Hook który nam ogarnia całe url
  const movieName = searchParams.get('name') ?? ''; //chcę z url wziąć wartość name a jeeli jej nie ma tp pusty string
  const filteredMovies = movies.filter(movie => {
    const movieNameLowerCase = movieName.toLowerCase(); //to wszystko co wpisuję w inputa zamieniam na małą literę
    return movie.name.toLowerCase().includes(movieNameLowerCase);
  });
  //jak wpisuję coś do inputa to chcę eby to się dodawało do searchParams, setSearchParams słuy eby to pakować do url
  useEffect(() => {
    if (location.state) {
      setSearchParams(location.state);
    }
    [];
  });

  const handleInput = name => {
    //wpisuję coś do inputa i ma mi to ładować do setSearchParams
    const params = name !== '' ? { name } : {}; //jeeli mój name jest rózny od pustego stringa to wrzucaj mi do paramsów i w tedy zwracamy name
    //a jak pusty to nie dodaje do setSearchParams

    setSearchParams(params);
  };
  return (
    <div>
      <input type="text" value="" onChange={e => handleInput(e.target.value)} />
      <div className="product-wrapper">
        {movies.map(el => (
          <div className="product" key={el.id}>
            <img src="" alt="" />
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movies;
