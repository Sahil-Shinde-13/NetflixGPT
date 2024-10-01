const formValidation = (email,password,name) =>{

    const isEmailValidate = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
    const isPasswordValidate = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
    const isNameValidate = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)

    if(!isEmailValidate) return "Email is not Valid"
    if(!isPasswordValidate) return 'Password is not Valid'
    if(!isNameValidate) return 'Invalid Name'
    return null;
}

export default formValidation;