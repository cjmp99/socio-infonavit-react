import Swal from 'sweetalert2'

const Alert = ({ icon, title, message }) => {
    Swal.fire({
        icon: `${icon}`,
        title: `${title}`,
        text: `${message}`
    })
}

export default Alert
