import ReactPaginate from 'react-paginate';
import {motion} from 'framer-motion'


export default function Paginate ({countAllQuestion, setCurrentPage, currentPage, perPage}) {
  
  const pagination = {
    hidden:{
      opacity:0,
      y:0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type:"spring",
        stiffness:260,
        damping:20,
        duration: 0.5
      }
    }
  }
  const handlePageClick = ({selected})=>{
    const nextPage = selected + 1;
    setCurrentPage(nextPage)
  }
  const pageCount = Math.ceil(countAllQuestion / perPage)

  return (
    <motion.div variants={pagination} initial='hidden' animate='visible' className='border-gray-300 '>
      {pageCount>1&&<ReactPaginate
        breakLabel={<span className='mx-2'>...</span>}
        nextLabel={pageCount > 1 &&<span className='block border border-gray-300 px-2 py-1 items-center rounded justify-center  hover:bg-gray-300 text-[13px] mr-1'>Next</span>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        initialPage={0}
        previousLabel={pageCount > 0 &&currentPage!==1 &&<span className='block border border-gray-300 px-2 py-1 items-center rounded justify-center  hover:bg-gray-300 text-[13px] mr-1'>Prev</span>}
        renderOnZeroPageCount={null}
        containerClassName='flex items-center justify-start'
        pageClassName='block border border-gray-300 rounded   flex items-center justify-center  hover:bg-gray-300 text-[13px] mr-1'
        pageLinkClassName ='w-full h-full block px-2 py-1'
        activeClassName='bg-[#f48225] text-white hover:bg-[#f48225]'
      />}
    </motion.div>
  )
}
