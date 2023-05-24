import React from 'react'

export default function FormBootstrap() {
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()
    const telephone = React.useRef()
    const textEmail = React.useRef()

    const onBlurEmail = () => {
        let email = textEmail.current.value
        if (email !== '' && !email.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})$/)){  
            alert ('กรุณากรองข้อมูล a-z 0-9 A-Z หรือ @')
        }
    }

    const onBlurPassword = () => {
        let pswd = textPswd.current.value
        if (pswd !== '' && !pswd.match(/^([0-9a-zA-Z]{8,20})+$/)){
            textPswd.current.value = ''
            alert ('กรุณากรองข้อมูล รหัสผ่านต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น กรองข้อมูล 8-20 ตัว')
        }
    }

    const onBlurPassword2 = () => {
        if (textPswd2.current.value !== textPswd.current.value){
            textPswd2.current.value = ''
            alert ('รหัสผ่านไม่ตรงกัน')
        }
    }

    const onBlurTelephone = () => {
        let tel = telephone.current.value
        if (tel !== '' && !tel.match(/^([0-9-]{10})+$/)){
            alert ('กรุณากรองข้อมูล รหัสผ่านต้องเป็น 0-9 ')
        }
    }
    
    return (
        <div class="container">
            <form action="/action_page.php">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" ref={textEmail} onBlur={onBlurEmail}/>
                </div>

                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={textPswd} onBlur={onBlurPassword}/>
                </div>

                <div class="mb-3">
                    <label for="pwd" class="form-label">Password Confirm:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password comfirm" name="pswd2" ref={textPswd2} onBlur={onBlurPassword2}/>
                </div>

                <div class="mb-3">
                    <label for="pwd" class="form-label">Telephone:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter Telephone" name="tel" ref={telephone} onBlur={onBlurTelephone}/>
                </div>

                <div class="form-check mb-3">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
