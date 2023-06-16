// eslint-disable-next-line react/prop-types
export default function HeaderLight({ children }) {
  return (
    <div
      style={{
        boxShadow:
          "0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05)",
      }}
      className="bg-white border border-[hsl(210,8%,90%)] dark:border-[hsl(210,4%,26%)] -mt-[10px]"
    >
      {children}
    </div>
  );
}
