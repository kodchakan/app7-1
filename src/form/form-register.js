import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const err = { fontSize: 'smaller', color: 'red', marginTop: 3 }
    const onSubmitForm = (event) => {
    }
    return (

        <div className="container mt-5 p-3 rounded" style={{ width: '500px', background:'#cee' }}>

            <div class="card">
                <div class="card-body">
                    <center><h3>Register Member</h3></center>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Username" placeholder="Username" name="Username"
                                {...register('Username', { required: true, maxLength: 30 })} />
                            {errors.Username && <div style={err}>กรุณากรอก Username</div>}
                            <label for="Username">Username</label>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Password" placeholder="Password" name="Password"
                                {...register('Password', { required: true, maxLength: 30 })} />
                            {errors.Password && <div style={err}>กรุณากรอก Password</div>}
                            <label for="Password">Password</label>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="name" placeholder="Password" name="name"
                                {...register('name', { required: true, maxLength: 30 })} />
                            {errors.name && <div style={err}>กรุณากรอก name</div>}
                            <label for="name">name</label>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <h5>Gender :</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <input type="number" class="form-control" id="age" name="age" step="any"
                                {...register('age', { validate: value => parseFloat(value) > 0 })} />
                            {errors.age && <div style={err}>กรุณากรอกอายุ</div>}
                            <label for="age">Age</label>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>กรุณาระบุจำนวนเงิน</option>
                                <option value="1">0-10000</option>
                                <option value="2">10001-15000</option>
                                <option value="3">15001-20000</option>
                            </select>
                            <label for="Password">Salary</label>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="email" placeholder="กรอกชื่อสินค้า" name="email"
                                {...register('email', {
                                    required: true, pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i
                                    }
                                })}
                            />
                            {errors.email && <div style={err}>กรุณากรอกอีเมล์</div>}
                            <label for="email">อีเมล์</label>
                        </div>

                        <div class="form-floating mb-3 mt-3">
                            <h5>Intersted :</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">Game</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label class="form-check-label" for="inlineCheckbox2">Music</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label class="form-check-label" for="inlineCheckbox3">Book</label>
                            </div>
                        </div>

                        <button mt-3 type='submit' className='btn btn-primary'> Register</button> &nbsp;
                        <button type='reset' className='btn btn-primary'> Cancle</button>

                    </form>

                </div>
            </div>
        </div>
    )
}