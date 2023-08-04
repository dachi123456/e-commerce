import arrowIcon from '../icons/right-arrow.png'
import './gmailComponent.css'
const GmailComponent = () => {

    const onFormSubmit = (e) => {
        e.preventDefault()
    }
    
    return(
        <form onSubmit={onFormSubmit} className='gmail-form'>
            <div className="email-area">
                <input type="email" placeholder='E-mail'/>
                <button >
                    <img src={arrowIcon} alt="" />
                </button>
            </div>
        </form>
    )
}

export default GmailComponent