import { Circles } from 'react-loader-spinner';

const ModalCompBackground = {
  position: 'absolute',
  zIdex: '100',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, .7)',
};

const ModalCompHolder = {
  position: 'absolute',
  zIndex: '101',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function LoadingModal() {
  return (
    <>
      <div style={ModalCompHolder}>
        <Circles
          height="80"
          width="80"
          color="#ffb400"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      </div>

      <div style={ModalCompBackground} />
    </>
  );
}

export default LoadingModal;
