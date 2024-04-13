import styles from './Details.module.css';
const Details=({onEdit,data})=>{
    return(
        <div className={styles.container}>
            <h2>Form Details</h2>
            <div className={styles.userInfo}>
                <h3>User Information:</h3>
                <p><strong>First Name:</strong> {data.firstName}</p>
                <p><strong>Last Name:</strong> {data.lastName}</p>
                <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Address:</strong> {data.address}</p>
            </div>
            
            <div className={styles.familyInfo}>
                <h3>Family Members:</h3>
                {data.familyMembers.map((member, index) => (
                    <div key={index} className={styles.familyMember}>
                        <p><strong>Name:</strong> {member.name}</p>
                        <p><strong>Age:</strong> {member.age}</p>
                    </div>
                ))}
            </div>
            
            <div className={styles.successMessage}>
                <h4>Thank you for submitting the form!</h4>
            </div>

        </div>
    )
}

export default Details