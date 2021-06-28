import Swal from 'sweetalert2'

const Alert = (
    icon,
    title,
    message,
    showCancelButton,
    confirmButtonColor,
    cancelButtonColor,
    confirmButtonText,
    showConfirmButton,
    dispatch,
    callback,
) => {
    Swal.fire({
        icon: `${icon}`,
        title: `${title}`,
        text: `${message}`,
        showCancelButton: showCancelButton,
        showConfirmButton: showConfirmButton,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: `${confirmButtonText}`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Closing session!',
                message: 'Come back soon.',
                icon: 'success',
                confirmButtonColor: confirmButtonColor,
            })
            callback(dispatch)
            return
        }
    })
}

export default Alert
