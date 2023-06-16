import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import deleteIcon from '../../assets/deleteIcon.png'

export default function InputTags({ inputTag, handleFocusTag, tags, setTags, onTagsChange }) {
  const [valueInputTag, setValueInputTag] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === " " && valueInputTag.trim() !== "") {
      setTags([...tags, valueInputTag.trim()]);
      setValueInputTag("");
    }
  };

  const handleDelTag = (index)=>{
    const newTags = [...tags]
    newTags.splice(index,1)
    setTags(newTags)
  }

  useEffect(() => {
    onTagsChange(tags);
  }, [tags, onTagsChange]);

  return (
    <div className="bg-gray-50 border flex gap-2 border-gray-300 text-gray-900 outline-none text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <div className="flex gap-1">
        {tags?.map((item, index) => (
          <div
            className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]"
            key={index}
          >
            <div className="flex items-center justify-center gap-1">
              <div>{item}</div>
              <div onClick={()=>handleDelTag(index)} className="cursor-pointer w-3 h-full"><img src={deleteIcon}/></div>
            </div>
          </div>
        ))}
      </div>
      <input
        value={valueInputTag}
        ref={inputTag}
        onFocus={handleFocusTag}
        type="text"
        id="helper-text"
        className="outline-none border-none w-full bg-transparent"
        placeholder="e.g. (sql sql-server css)"
        onChange={(e) => setValueInputTag(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

InputTags.propTypes = {
  inputTag: PropTypes.object.isRequired,
  handleFocusTag: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.string),
  setTags: PropTypes.func,
  onTagsChange: PropTypes.func,
};
