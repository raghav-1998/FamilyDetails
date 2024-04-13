import { useForm } from "react-hook-form"
import styles from './FirstStepForm.module.css';

const FirstStepForm=({onNext})=>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=(data)=>{
        //console.log(errors)
        onNext(data)
    }
    console.log(errors)
    return(
        <div > 
            <form className={styles.firstStepForm} onSubmit={handleSubmit(onSubmit)}>
                <h2>Personal Details:</h2>
                <div className={"mb-3"}>
                    <input type="text" id="firstName" placeholder="First Name" className={`form-control ${errors.firstName?styles.errorInput:''}`} {...register("firstName",{required:"First Name is Required",maxLength:{value:50,message:"First Name should not be greater than 50 characters"}})}/>
                    {errors.firstName && <div className={styles.errorMessage}>{errors.firstName.message}</div>}
                </div>
                <div className={"mb-3"}>
                    <input type="text" id="" placeholder="Last Name" className={`form-control ${errors.lastName?styles.errorInput:''}`} {...register("lastName",{required:"Last Name is Required",maxLength:{value:50,message:"Last Name should not be greater than 50 characters"}})}/>
                    {errors.lastName && <div className={styles.errorMessage}>{errors.lastName.message}</div>}
                </div>
                <div className={"mb-3"}>
                    <input type="number" id="" placeholder="Phone Number" className={`form-control ${errors.phoneNumber?styles.errorInput:''}`} {...register("phoneNumber",{required:"Phone Number is Required",pattern:{value:/^\d{10}$/,message:"Phone Number must be of 10 digits"}})}/>
                    {errors.phoneNumber && <div className={styles.errorMessage}>{errors.phoneNumber.message}</div>}
                </div>
                <div className={"mb-3"}>
                    <input type="email" id="" placeholder="Email" className={`form-control ${errors.email?styles.errorInput:''}`} {...register("email",{required:"Email is required",pattern:{value:/^\S+@\S+\.\S+$/i,message:"Invalid Email Id"}})}/>
                    {errors.email && <div className={styles.errorMessage}>{errors.email.message}</div>}
                </div>
                <div className={"mb-3"}>
                    <textarea id="" cols="15" rows="5" placeholder="Address" className={`form-control ${errors.address?styles.errorInput:''}`} {...register("address",{required:"Address is required",maxLength:{value:255,message:"Address must be of maximum 255 characters"}})}></textarea>
                    {errors.address && <div className={styles.errorMessage}>{errors.address.message}</div>}
                </div>
                <button type="submit" className={`${styles.submitButton} btn btn-primary`}>Next</button>
            </form>
        </div>
    )
}


export default FirstStepForm