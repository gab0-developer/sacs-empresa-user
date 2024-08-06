import Swal from 'sweetalert2'

export const  AlertsMessage = (title,text,textConfirm) => {
  return (
    <>
        {
            Swal.fire(
                {
                title: title,
                text: text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: textConfirm
                }).then( async(result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
                }
            )
        }
    </>
  )
}

export const  AlertsDelete = () => {
  return (
    <>Alerts</>
  )
}
