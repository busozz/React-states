import {useState} from 'react'

function InputExample() {

  const [form,setForm] = useState({name:"",surname:""})

  const onChangeInput = (e) => {
    
    setForm({...form, [e.target.name]: e.target.value })      // Değer ataması yapıldı.
    }

    return (
      <div>
        <form >
          <label htmlFor="name">Lütfen İsminizi Giriniz!</label> <br />
          <input name='name' type="text" value={form.name} onChange={onChangeInput} />
          <label htmlFor="surname"></label>  <br />
          <input name="surname" type="text" value={form.surname} onChange={onChangeInput} />
          </form>
          <h1>{form.name}  {form.surname} </h1>
      </div>
    )
}

export default InputExample