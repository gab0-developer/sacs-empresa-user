import { Box, Modal, IconButton } from '@mui/material'
import '../../assets/Css/Popup.css'
import CloseIcon from '@mui/icons-material/Close';
// import img from '../../assets/Img/Exportar_img_all'

function PopupComponent({onOpen,title,bodymodal,onClose}) {

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height:'90vh',
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        pt:0,
        px:2.5,
        pb:3,
        color:'#000',
        
        // overflow:'scroll'
        overflow: 'auto',
    };
    const styleTitle ={
        textAlign:'center',
        py:2,
        bgcolor:'#5ebe9e7c'
    }

  return (
    <>
        <Modal
        
            open={onOpen}

        >

            <Box sx={styleModal}>
                <Box component='h3' className='tit_popup' >
                    <img src="" alt="" />
                    {title}
                    <Box>
                        <IconButton aria-label="" onClick={onClose} >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box className='cont_bodymodal-'>
                    <Box className='bodymodal-'>
                        {bodymodal}
                    </Box>
                </Box>
                
                
            </Box>

        </Modal>
    </>
  )
}

export default PopupComponent

