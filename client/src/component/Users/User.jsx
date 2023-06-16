import { Link } from "react-router-dom";
import propTypes from "prop-types";
import UserCard from "./UserCard";

export default function User({ user }) {
  const { username, avatar, Tags, id } = user;

  return (
    <div className="flex gap-2 p-2 relative">
      <UserCard user={user} />

      <div className="flex flex-col gap-1">
        <Link
          to={`${id}/${username}`}
          className="text-[hsl(206,100%,40%)] hover:text-[hsl(206,100%,52%)] text-[15px]"
        >
          {username}
        </Link>
        <div className="text-[hsl(210,8%,45%)]">{user?.ProfileUsers[0]?.location}</div>
        <div className="font-bold text-[hsl(210,8%,45%)]">
          {user?.ProfileUsers[0]?.point}
        </div>
        <div className="flex gap-2">
          {Tags.map((tag) => (
            <Link
              to={`/questions/tagged/${tag.nameTag}`}
              key={tag.id}
              className=" text-blue-500 rounded text-[12px] hover:text-[hsl(205,46%,32%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:text-[hsl(205,49.5%,87%)]"
            >
              {tag.nameTag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
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
