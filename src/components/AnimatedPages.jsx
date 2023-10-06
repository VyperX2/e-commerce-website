import { motion } from "framer-motion"
const AnimatedPages = ( {children}) => {
  const animations = {
    initial : {x : -100 , opacity : 0},
    animate : {x : 0 , opacity : 1},
    exit : {x : 100 , opacity : 0},
  }

  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default AnimatedPages