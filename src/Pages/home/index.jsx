import { useState } from "react"
import Card from "../../components/Card/INDEX.JSX"
import Layout from "../../components/Layout"
import { useEffect } from "react"

function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.log(error))

  }, [])
  

    return (
        <Layout>
          Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
              items && items.map((item) => (
                <Card key={item.id} data={item} />
              ))
            }
          </div>
        </Layout>
      )
  }
  
  export default Home