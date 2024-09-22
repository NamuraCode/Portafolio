import styles from "./HelperTag.module.css"

interface HelperTagProps {
    image: string
    text: string
}

export const HelperTag = ({ text, image }: HelperTagProps) => {
  return (
    <div>
        <span>{text}</span>    
    </div>
  )
}
