import Confetti from 'react-confetti'

const ConfettiAnimation = ({ active }) =>
   active && <Confetti numberOfPieces={200} gravity={0.6} />

export default ConfettiAnimation
