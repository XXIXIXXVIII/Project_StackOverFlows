import Tippy from "@tippyjs/react/headless";
import { useSpring, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import publicClient from "../../configAPIClient/publicClient";
import { Link } from "react-router-dom";

const Box = styled(motion.div)`
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: -30px;
`;

export default function UserCard({user}) {
  const {id, username, avatar} = user

  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  function onMount() {
    scale.set(1);
    opacity.set(1);
    
  }


  function onHide({ unmount }) {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }

  return (
    <Tippy
      render={(attrs) =>(
        <Box style={{ scale, opacity }} {...attrs}>
          <div className="text-[hsl(210,8%,90%)] flex gap-2 flex-col py-1">
            <div className="flex gap-3">
              <Link to={`/users/${id}/${username}`} className="w-24 h-24 overflow-hidden rounded">
                <img className="object-cover w-full" src={avatar!=='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'?`http://localhost:8080/${avatar}`:'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'} />
              </Link>
              <div>
                <Link to={`/users/${id}/${username}`} className="text-xl hover:text-blue-300">{username}</Link>
                <div className="font-semibold text-base">{user?.ProfileUsers[0]?.point}</div>
                <div className="text-[10px]">{user?.ProfileUsers[0]?.location}</div>
                <div className="text-blue-400 hover:text-blue-200 text-[10px]"><a href={`${user?.ProfileUsers[0]?.websiteLink}`}>{user?.ProfileUsers[0]?.websiteLink}</a></div>
              </div>
            </div>
            <div className="break-words" dangerouslySetInnerHTML={{ __html: user?.ProfileUsers[0]?.aboutme }}></div>
          </div>
        </Box>
      )}
      animation={true}
      onMount={onMount}
      onHide={onHide}
      interactive
    >
      <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center">
        <img className="object-cover w-full" src={avatar!=='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'?`http://localhost:8080/${avatar}`:'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'} />
      </div>
    </Tippy>
  );
}
