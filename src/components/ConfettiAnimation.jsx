import Confetti from 'react-confetti'

const ConfettiAnimation = ({ active }) =>
   active && <Confetti numberOfPieces={500} gravity={0.3} />

export default ConfettiAnimation
