export const searchCities = (query, cities) => {
    query = query.toLowerCase()
    const matchedCities = cities.filter(city => city.name.toLowerCase().includes(query))
    return matchedCities.slice(0, 20)
}