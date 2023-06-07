
import HeaderDefauLayout from "../component/HeaderDefauLayout"


export default function HeaderOnlyLayout(props) {
  // eslint-disable-next-line react/prop-types
  let {children} = props
  return (
    <div>
    <HeaderDefauLayout/>
    {children}
    </div>
  )
}