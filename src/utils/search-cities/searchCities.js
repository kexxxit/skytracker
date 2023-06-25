import citiesList from '../../assets/cities/city_ru.json'

export const searchCities = (query) => {
    query = query.toLowerCase()
    const matchedCities = citiesList.filter(city => city.name.toLowerCase().includes(query))
    return matchedCities.slice(0, 20)
}