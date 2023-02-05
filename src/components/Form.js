import { useState } from "react"

const Form = ({ setImage, onSubmit }) => {
  const [dream, setDream] = useState("")

  const handleChange = (e) => {
    setDream(e.target.value)
  }

  const handleSubmit = async (e) => {
    if (!dream) {
      return
    }
    e.preventDefault()
    setImage("")
    await onSubmit(dream)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='dreamInput' className='form-label'>
          Enter your Dream
        </label>
        <input
          type='text'
          className='form-control'
          id='dreamInput'
          placeholder='Draw me a...'
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-outline-secondary'>
        Submit
      </button>
    </form>
  )
}

export default Form
