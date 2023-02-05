import { useState, useEffect } from "react"
import { Configuration, OpenAIApi } from "openai"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Image from "./components/Image"

const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

function App() {
  const [image, setImage] = useState("")

  const configuration = new Configuration({
    apiKey: OPENAI_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const onSubmit = async (dream) => {
    try {
      const response = await openai.createImage({
        prompt: dream,
        n: 1,
        size: "1024x1024",
      })
      const image = response.data.data[0].url
      setImage(image)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Form setImage={setImage} onSubmit={onSubmit} />
        {image && <Image image={image} />}
      </div>
    </div>
  )
}

export default App
