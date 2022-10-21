import React, { useState } from 'react'

function Form() {

    const [form, setForm] = useState({name:'', surname: '', gender: '0'});
    const handleChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name] : e.target.value}))

/*     const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('0');

 */
  return (
    <div>
        <div>
            <div>İsim</div>
            <input placeholder='isim' value={form.name} onChange={handleChange} name='name'/>
            <input placeholder='soyisim' value={form.surname} onChange={handleChange} name='surname' />
        </div>

        <div>
            <select value={form.gender} onChange={handleChange} name='gender'>
                <option value={'0'}>Erkek</option>
                <option value={'1'}>Kadın</option>
            </select>
        </div>

        <hr />
        <div>{form.name}</div>
        <div>{form.surname}</div>
        <div>{form.gender === '0' ? 'Erkek' : 'Kadın'}</div>
    </div>
  )
}

export default Form