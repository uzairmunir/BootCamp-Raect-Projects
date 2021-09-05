const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  //Set Fetched data
  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
    };
    fetchedData();
  }, []);
  const handleChange = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
  };
  return (
    <div className='container'>
      <div className='img-div'>
        <img
          src='https://scitechdaily.com/images/Coronavirus-Particle-Triangular-Spikes.gif'
          className='covid-img'
        />
      </div>
      <CardData data={data} />
      <CountryPicker handleChange={handleChange} />
    </div>
  );
};
