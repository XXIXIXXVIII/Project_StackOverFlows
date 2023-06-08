import Tippy from "@tippyjs/react/headless";
import { useSpring, motion } from "framer-motion";
import styled from "styled-components";

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
  console.log(user);
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
      render={(attrs) => (
        <Box style={{ scale, opacity }} {...attrs}>
          <div className="text-[hsl(210,8%,90%)] flex gap-2">
            <div className="w-24">
              <img className="object-cover w-full" src={`${avatar}`} />
            </div>
            <div>
              <div className="text-lg">{username}</div>
              <div></div>
            </div>
          </div>
        </Box>
      )}
      animation={true}
      onMount={onMount}
      onHide={onHide}
    >
      <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center">
        <img className="object-cover w-full" src={`${avatar}`} />
      </div>
    </Tippy>
  );
}
