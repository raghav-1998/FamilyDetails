import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './SecondStepForm.module.css'
const SecondStepForm=({onPrevious,onSubmit})=>{
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [familyMembers,setFamilyMembers]=useState([{id:Date.now(),name:'',age:''}])

    const handleAddMember=()=>{
        setFamilyMembers([...familyMembers, { id: Date.now(), name: '', age: '' }]);
    }

    const handleRemoveMember=(id)=>{
        setFamilyMembers(familyMembers.filter(member=>member.id!==id))
    }

    const handleFormSubmit=(data)=>{
        onSubmit(data)
    }

    return(
        <form className={styles.formContainer} onSubmit={handleSubmit(handleFormSubmit)}>
            <h2>Family Members Details:</h2>
            {
                familyMembers.map(
                    (member,index)=>(
                        <div key={member.id}>
                            <div className="mb-3">
                                <input type="text" id="" placeholder="Name" className={`form-control ${errors.familyMembers && errors.familyMembers[index] ? styles.errorInput : ''}`} {...register(`familyMembers[${index}].name`,{required:"Name is Required",maxLength:{value:50,message:"Name should be of maximum 50 characters"}})}/>
                                {errors.familyMembers && errors.familyMembers[index] && (
                                    <div className={styles.errorMessage}>{errors.familyMembers[index].name.message}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input type="number" id="" placeholder="Age" className={`form-control ${errors.familyMembers && errors.familyMembers[index] ? styles.errorInput : ''}`} {...register(`familyMembers[${index}].age`,{required:"Age is Required",min:{value:1,message:"Invalid Person's Age"}})}/>
                                {errors.familyMembers && errors.familyMembers[index] &&(
                                    <div className={styles.errorMessage}>{errors.familyMembers[index].age.message}</div>
                                )}
                            </div>
                            <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>Submit</button>
                            {
                                familyMembers.length > 1 && (
                                    <button type="button" className="btn btn-danger me-2" onClick={()=>handleRemoveMember(member.id)}>
                                        Remove
                                    </button>
                                )
                            }
                        </div>
                    )
                )
            }


            <button type="button" className="btn btn-secondary me-2" onClick={handleAddMember}>Add More Family Member</button>
            <button type="button" className="btn btn-secondary me-2" onClick={onPrevious}>Previous</button>
            
        </form>
    )
}

export default SecondStepForm;