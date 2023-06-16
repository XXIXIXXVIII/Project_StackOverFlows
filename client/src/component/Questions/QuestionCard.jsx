/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import moment from 'moment';
import '../index.css'
import { useSelector } from "react-redux";
import openEye from '../../assets/tagdetail/openEye.png'
import parse from 'html-react-parser'
import { useEffect } from "react";




export default function QuestionCard({id,like, title,totalAnswers, content,view,tick, createdAt, avatar, username, userId, tags, fetch}) {
  const currenUserId = useSelector(state=>state.auth.login.currentUser?.id)
  console.log(avatar);
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div className="mx-auto py-4 flex gap-5 text-[13px] border-t border-[hsl(210,8%,90%)]">
    <div className="basis-[14%] flex flex-col items-end gap-1">
      <div>{like} votes</div>
      <div className="text-gray-500">{totalAnswers} answers</div>
      <div className="text-gray-500">{view} views</div>
    </div>
    <div className="flex-1 overflow-hidden">
      <Link to={`/question/${id}`} className="titleQuestion text-[17px] text-blue-600 hover:text-blue-400 break-word" dangerouslySetInnerHTML={{ __html: title }}>

      </Link>
      <div className="contentQuestion my-1 break-word">
      {content && parse(content)}
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-1 flex gap-1">
          {tags.map(tag=><Link onClick={()=>fetch()} to={`/questions/tagged/${tag.nameTag}`} key={tag.id} className="bg-[hsl(205,46%,92%)] flex justify-center items-center gap-1 text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
           {tag?.userTag?.some(item=>item.userId===currenUserId)&&<img className="w-4" src={openEye}/>} {tag.nameTag}
          </Link>)
            }

        </div>
        <div className="flex gap-1">
          <Link className="w-4 h-4 overflow-hidden">
            <img className="object-cover" src={avatar!=='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'?`http://localhost:8080/${avatar}`:'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'}/>
          </Link>
          <Link to={`/users/${userId}/${username}`} className="text-blue-500 hover:text-blue-300">
          {username}
          </Link>
          <div>
            <span className="text-[hsl(210,8%,35%)] font-medium dark:text-[hsl(210,7%,78.5%)]">1</span> <Link className="text-[hsl(210,8%,45%)] dark:text-[hsl(210,8%,70%)]">asked {timeAgo}</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


QuestionCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  totalAnswers: PropTypes.number,
  content: PropTypes.string,
  view: PropTypes.number,
  like: PropTypes.number,
  tick: PropTypes.bool,
  createdAt: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  userId: PropTypes.number,
  fetch: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.object),

};