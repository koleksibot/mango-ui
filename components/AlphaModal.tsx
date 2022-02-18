import React from 'react'
import Modal from './Modal'
import Button from './Button'
import useLocalStorageState from '../hooks/useLocalStorageState'

const AlphaModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose?: (x) => void
}) => {
  const [, setAlphaAccepted] = useLocalStorageState(
    'mangoAlphaAccepted-2.0',
    false
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideClose>
      <Modal.Header>
        <div className="flex flex-col items-center">
          <div className="flex space-x-8 items-center justify-center ">
            <img
              className={`h-8 w-auto mb-2`}
              src="/assets/icons/sol.svg"
              alt="next"
            />
            <img
              className={`h-12 w-auto mb-2`}
              src="/assets/icons/logo.png"
              alt="next"
            />
            <img
              className={`h-10 w-auto mb-2`}
              src="/assets/icons/srm.svg"
              alt="next"
            />
          </div>
        </div>
      </Modal.Header>
      <div className={`text-th-fgd-2 text-center`}>
        SOL and SRM now available with USDC!
      </div>
      <div className="text-th-fgd-2 text-center my-4">
        Visit{' '}
        <a
          href="https://catodex.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://catodex.com/
        </a>{' '}
        to trade unleveraged tokens.
      </div>
      <div className={`text-th-fgd-2 text-center`}>
        CATO x Mango Markets is unaudited software. Use at your own risk.
        <div className={`mt-4 flex justify-center`}>
          <Button onClick={() => setAlphaAccepted(true)}>
            <div className={`flex items-center`}>Accept</div>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default React.memo(AlphaModal)
