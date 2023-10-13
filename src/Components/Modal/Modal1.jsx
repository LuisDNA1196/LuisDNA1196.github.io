import '../../Styles/modales.css'

const Modal= ({isOpen, onClose, children}) => {
  console.log("Modal onClose function called");
  
  return (
    <div className={`modal-container ${isOpen ? 'open' : 'close'}`}>
        <div className='modal-body'>
                <button className='modal-close' onClick={onClose}>X</button>
                {children}
        </div>
    </div>

    
  )
}

export default Modal