import bgQuestionAsk from "../assets/bgQuestionAsk.svg";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import penQuestionAskIcon from "../assets/penQuestionAskIcon.png";
import InputTags from "../component/Tags/InputTags";
import privateClient from "./../configAPIClient/privateClient";
import { useSelector } from "react-redux";
import Success from "../component/ModalAlert/Success";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

export default function QuestionAsk() {
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [text, setText] = useState();
  const [textContentt, setTextContent] = useState();
  const [showContent, setShowContent] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [focusTitle, setFocusTitle] = useState(true);
  const [focusContent, setFocusContent] = useState(false);
  const [focusTag, setFocusTag] = useState(false);
  const [tags, setTags] = useState([]);
  const [alert, setAlert] = useState();

  const extractTextFromHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const userId = useSelector((state) => state.auth.login.currentUser?.id);

  useEffect(() => {
    setText(extractTextFromHtml(valueTitle).trim().length);
  }, [valueTitle]);

  useEffect(() => {
    setTextContent(extractTextFromHtml(valueContent).trim().length);
  }, [valueContent]);

  const handleFocusTitle = () => {
    setFocusTitle(true);
    setFocusContent(false);
    setFocusTag(false);
  };
  const handleFocusContent = () => {
    setFocusTitle(false);
    setFocusContent(true);
    setFocusTag(false);
  };
  const handleFocusTag = () => {
    setFocusTitle(false);
    setFocusContent(false);
    setFocusTag(true);
  };

  const inputConten = useRef(null);
  const inputTag = useRef(null);

  const handleClickNextTitle = () => {
    setShowContent(true);
    inputConten.current.focus();
  };

  const handleNextContent = () => {
    setShowTag(true);
    inputTag.current.focus();
  };

  const onTagsChange = (newTags) => {
    setTags(newTags);
  };

  const handlePost = () => {
    const fetchData = async () => {
      try {
        const result = await privateClient.post("/questions", {
          userId,
          valueTitle,
          valueContent,
        });

        if (result.status === 201) {

          const questionId = result.data.id;

          setAlert("success");
          await privateClient.post("/tags", { tags,questionId });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  const handleAlert = () => {
    setAlert("");
  };

  return (
    <div className="bg-gray-50 w-full h-full relative">
      {alert === "success" && (
        <Success
          content={"Ask questions successfully "}
          handleAlert={handleAlert}
          link={"/questions"}
          linkTo={"Questions"}
        />
      )}
      <div className="w-[82%] mx-auto text-sm">
        <div className="font-medium text-3xl h-36 flex items-center relative mb-3">
          Ask a public question
          <div className="absolute top-0 right-4 w-[45%]">
            <img src={bgQuestionAsk} />
          </div>
        </div>
        <div className="w-[70%] p-6 bg-blue-50 rounded border border-blue-300">
          <div className="text-2xl">Writing a good question</div>
          <div className="text-base">
            <div>
              You’re ready to
              <a
                className="text-blue-500"
                href="https://stackoverflow.com/help/how-to-ask"
              >
                ask
              </a>
              a
              <a
                className="text-blue-500"
                href="https://stackoverflow.com/help/on-topic"
              >
                programming-related question
              </a>
              and this form will help guide you through the process.
            </div>
            <div>
              Looking to ask a non-programming question? See
              <a
                className="text-blue-500"
                href="https://stackexchange.com/sites#technology"
              >
                the topics here
              </a>
              to find a relevant site.
            </div>
          </div>
          <div>
            <span className="text-base block my-3">Steps</span>
            <ul className="ml-9">
              <li className="list-disc">
                Summarize your problem in a one-line title.
              </li>
              <li className="list-disc">
                Describe your problem in more detail.
              </li>
              <li className="list-disc">
                Describe what you tried and what you expected to happen.
              </li>
              <li className="list-disc">
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li className="list-disc">
                Review your question and post it to the site.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mt-9">
          <div className="basis-[70%] mb-28">
            <div className="p-6 border border-[hsl(210,8%,90%)] rounded bg-white relative">
              {focusTitle && (
                <div className="absolute top-0 -right-[46%] w-[43%]">
                  <div className="p-3 bg-gray-100 border border-[hsl(210,8%,85%)]">
                    Introduce the problem
                  </div>
                  <div className="p-4 bg-white border-x border-b border-[hsl(210,8%,85%)] flex items-center justify-center text-xs gap-2">
                    <img src={penQuestionAskIcon} />
                    <p>
                      Explain how you encountered the problem you’re trying to
                      solve, and any difficulties that have prevented you from
                      solving it yourself.
                    </p>
                  </div>
                </div>
              )}
              <div className="font-semibold text-base my-1">
                What are the details of your problem?
              </div>
              <div className="my-1 text-sm">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </div>
              <div className="">
                <ReactQuill
                  className="break-all"
                  theme="snow"
                  value={valueTitle}
                  onChange={setValueTitle}
                  modules={modules}
                  onFocus={handleFocusTitle}
                />
              </div>
              <button
                onClick={handleClickNextTitle}
                style={{
                  pointerEvents: text < 21 ? "none" : "auto",
                  opacity: text < 21 ? "0.5" : "1",
                  display: showContent ? "none" : "block",
                }}
                className="bg-[hsl(206,100%,52%)] mt-3 rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
              >
                Next
              </button>
            </div>

            <div
              style={{
                pointerEvents: !showContent ? "none" : "auto",
                opacity: !showContent ? "0.5" : "1",
              }}
            >
              <div className="p-6 border border-[hsl(210,8%,90%)] rounded bg-white mt-8 relative">
                {focusContent && (
                  <div className="absolute top-0 -right-[46%] w-[43%]">
                    <div className="p-3 bg-gray-100 border border-[hsl(210,8%,85%)]">
                      Expand on the problem
                    </div>
                    <div className="p-4 bg-white border-x border-b border-[hsl(210,8%,85%)] items-start flex text-xs gap-2">
                      <img src={penQuestionAskIcon} />
                      <div>
                        <div>
                          Show what you’ve tried, tell us what happened, and why
                          it didn’t meet your needs.
                        </div>
                        <div className="my-3">
                          Not all questions benefit from including code, but if
                          your problem is better understood with code you’ve
                          written, you should include a{" "}
                          <a
                            className="text-blue-500"
                            href="https://stackoverflow.com/help/minimal-reproducible-example"
                          >
                            minimal, reproducible example.
                          </a>
                        </div>
                        Please make sure to post code and errors as text
                        directly to the question (and{" "}
                        <a
                          className="text-blue-500"
                          href="https://meta.stackoverflow.com/questions/285551/why-should-i-not-upload-images-of-code-data-errors"
                        >
                          not as images
                        </a>
                        ), and{" "}
                        <a
                          className="text-blue-500"
                          href="https://stackoverflow.com/help/formatting"
                        >
                          format them appropriately
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                )}
                <div className="font-semibold text-base my-1">
                  What did you try and what were you expecting?
                </div>
                <div className="my-1 text-sm">
                  Describe what you tried, what you expected to happen, and what
                  actually resulted. Minimum 220 characters.
                </div>
                <ReactQuill
                  className="break-all"
                  theme="snow"
                  value={valueContent}
                  onChange={setValueContent}
                  modules={modules}
                  onFocus={handleFocusContent}
                  ref={inputConten}
                />
                <button
                  onClick={handleNextContent}
                  style={{
                    pointerEvents: textContentt < 220 ? "none" : "auto",
                    opacity: textContentt < 220 ? "0.5" : "1",
                    display: showTag ? "none" : "block",
                  }}
                  className="bg-[hsl(206,100%,52%)] mt-3 rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
                >
                  Next
                </button>
              </div>
            </div>

            <div
              style={{
                pointerEvents: !showTag ? "none" : "auto",
                opacity: !showTag ? "0.5" : "1",
              }}
            >
              <div className="p-6 border border-[hsl(210,8%,90%)] rounded bg-white mt-8 relative">
                {focusTag && (
                  <div className="absolute top-0 -right-[46%] w-[43%]">
                    <div className="p-3 bg-gray-100 border border-[hsl(210,8%,85%)]">
                      Adding tags
                    </div>
                    <div className="p-4 bg-white border-x border-b border-[hsl(210,8%,85%)] flex items-center justify-center text-xs gap-2">
                      <img src={penQuestionAskIcon} />
                      <div>
                        <div>
                          Tags help ensure that your question will get attention
                          from the right people.
                        </div>

                        <div className="my-2">
                          Tag things in more than one way so people can find
                          them more easily. Add tags for product lines,
                          projects, teams, and the specific technologies or
                          languages used.
                        </div>

                        <a
                          href="https://stackoverflow.com/help/tagging"
                          className="text-blue-500"
                        >
                          Learn more about tagging
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                <div className="font-semibold text-base my-1">Tags</div>
                <div className="my-1 text-sm">
                  Add up to 5 tags to describe what your question is about.
                  Start typing to see suggestions.
                </div>

                <InputTags
                  handleFocusTag={handleFocusTag}
                  inputTag={inputTag}
                  tags={tags}
                  setTags={setTags}
                  onTagsChange={onTagsChange}
                />
              </div>
              <button
                onClick={handlePost}
                className="bg-[hsl(206,100%,52%)] mt-3 rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
              >
                Post your question
              </button>
              <button className="p-2 text-red-500 font-normal ml-5">
                Discard draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
