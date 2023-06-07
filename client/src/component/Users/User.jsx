import { Link } from "react-router-dom";
import propTypes from 'prop-types';


export default function User({user}) {
  
  const {username, avatar, Tags, ProfileUser, id} = user
console.log(avatar);
  return (
    <div className="flex gap-2 p-2">
      <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center">
        <img className="object-cover w-full" src={`${avatar}`}/>
      </div>
      <div className="flex flex-col gap-1">
        <Link to={`${id}/${username}`} className="text-[hsl(206,100%,40%)] hover:text-[hsl(206,100%,52%)] text-[15px]">{username}</Link>
        <div className="text-[hsl(210,8%,45%)]">{ProfileUser?.andress}</div>
        <div className="font-bold text-[hsl(210,8%,45%)]">{ProfileUser?.point}</div>
        <div className="flex gap-2">
        {Tags.map(tag=><Link key={tag.id} className="text-[hsl(206,100%,40%)] hover:text-[hsl(206,100%,52%)] ">{tag?.nameTag}</Link>)}

        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  user: propTypes.shape({
    username: propTypes.string,
    avatar: propTypes.string,
    Tags: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        nameTag: propTypes.string,
      })
    ),
    ProfileUser: propTypes.shape({
      andress: propTypes.string,
      point: propTypes.number,
    }),
    id: propTypes.number,
  }),
};