import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starships = await getStarshipList()
        setStarships(starships.results)
        console.log(starships)
      
    }
    fetchStarshipData()
  }, [])
  return (
    <div class="card-container">
      {starships.map(starship =>
        <Link key={starship.name} to='/starship' state={{ starship }}     class='card'>
          {starship.name}
        </Link>
      )}
    </div>
  )
}

export default StarshipList