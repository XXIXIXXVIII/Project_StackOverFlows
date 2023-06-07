import FooterDefault from "../component/FooterDefault";
import HeaderDefault from "../component/HeaderDefault";



// eslint-disable-next-line react/prop-types
export default function DefaultLayout({children}) {
  return (
    <>
      <HeaderDefault/>
      {children}
      <FooterDefault/>
    </>
  )
}
