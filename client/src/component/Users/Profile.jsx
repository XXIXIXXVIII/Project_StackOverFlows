import { Link } from "react-router-dom";
import cupIcon from "../../assets/iconUserDetail/cupIcon.png";
import { LogoGoogleIcloud } from "../IconsImg";
import iconLogo from "../../assets/iconUserDetail/iconLogo.png";
import goldMedal from "../../assets/iconUserDetail/goldMedal.png";
import goldMedalBig from "../../assets/iconUserDetail/goldMedalBig.png";
import silverMedal from "../../assets/iconUserDetail/silverMedal.png";
import silverMedalBig from "../../assets/iconUserDetail/silverMedalBig.png";
import bronzeMedal from "../../assets/iconUserDetail/bronzeMedal.png";
import { RxDotFilled } from "react-icons/rx";
import { useEffect, useState } from "react";
import publicClient from "./../../configAPIClient/publicClient";
import moment from "moment";
import questionIcon from "../../assets/questionIcon.png";
import answersIcon from "../../assets/answersIcon.png";
import queryString from "query-string";
import parse from "html-react-parser";

// eslint-disable-next-line react/prop-types
export default function Profile({ userData, handleSettings }) {
  const [countQuestion, setCountQuestion] = useState();
  const [countAnswers, setCountAnswers] = useState();
  const [badgesData, setBadgesData] = useState();
  const [post, setPost] = useState("All");
  const [postSort, setPostSort] = useState("Newest");
  const [dataQuestion, setDataQuestion] = useState();
  const [dataAnswers, setDataAnswers] = useState();
  const [dataAll, setDataAll] = useState();
  const [dataTags, setDataTags] = useState();
  

  useEffect(() => {
    const fetchCountQuestion = async () => {
      try {
        const result = await publicClient.get(
          `/questions/getQuestionForUser/${userData?.id}`
        );
        setCountQuestion(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountQuestion();

    const fetchCountAnswers = async () => {
      try {
        const result = await publicClient.get(
          `/answers/countanswerforuser/${userData?.id}`
        );
        setCountAnswers(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountAnswers();

    const fetchBadgesData = async () => {
      try {
        const result = await publicClient.get(`/badges/${userData?.id}`);
        setBadgesData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBadgesData();

    const fetchDataTags = async () => {
      try {
        const result = await publicClient.get(`/tags/users/${userData?.id}`);
        setDataTags(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTags();
  }, [userData]);

  const url = `?${queryString.stringify({ postSort })}`;
  useEffect(() => {
    fetchDataQuestion();
    fetchDataAnswers();
  }, [userData]);


  useEffect(() => {
    if (dataAnswers?.length > 0 && dataQuestion?.length > 0) {
      setDataAll([...dataAnswers, ...dataQuestion]);
    }
  }, [dataAnswers, dataQuestion]);

  const fetchDataQuestion = async () => {
    try {
      const resultgetQuestion = await publicClient.get(
        `questions/getAllQuestionForUser/${userData?.id}${url}`
      );
      setDataQuestion(resultgetQuestion.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataAnswers = async () => {
    try {
      const resultgetAnswers = await publicClient.get(
        `answers/getAllAnswersForUser/${userData?.id}${url}`
      );
      setDataAnswers(resultgetAnswers.data);
    } catch (error) {
      console.log(error);
    }
  };

  const badgesBronze = badgesData?.filter(
    (item) => item.BadgesQuestion?.type === 1 || item.BadgesAnswer?.type === 1
  );

  const badgesSilver = badgesData?.filter(
    (item) => item.BadgesQuestion?.type === 2 || item.BadgesAnswer?.type === 2
  );
  const badgesGold = badgesData?.filter(
    (item) => item.BadgesQuestion?.type === 3 || item.BadgesAnswer?.type === 3
  );

  useEffect(() => {}, []);
  const badgesBronze3item = badgesBronze?.slice(0, 3);
  const badgesSilver3item = badgesSilver?.slice(0, 3);
  const badgesGold3item = badgesGold?.slice(0, 3);

  const toltalPointBronze = badgesBronze?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.BadgesQuestion?.poin
        ? currentValue.BadgesQuestion.poin
        : currentValue.BadgesAnswer?.poin,
    0
  );
  const toltalPointSilver = badgesSilver?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.BadgesQuestion?.poin
        ? currentValue.BadgesQuestion.poin
        : currentValue.BadgesAnswer?.poin,
    0
  );
  const toltalPointGold = badgesGold?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.BadgesQuestion?.poin
        ? currentValue.BadgesQuestion.poin
        : currentValue.BadgesAnswer?.poin,
    0
  );

  const handleClickAll = () => {
    setPost("All");
  };
  const handleClickQuestion = () => {
    setPost("Question");
  };
  const handleClickAnswers = () => {
    setPost("Answers");
  };

  const handleClickScore = () => {
    setPostSort("Score");
    if (post === "Question") {
      fetchDataQuestion();
    }
    if (post === "Answers") {
      fetchDataAnswers();
    } else {
      let newDataAll = [...dataAll];
      newDataAll.sort((a, b) => b.like - a.like);
      setDataAll(newDataAll);
    }
  };
  const handleClickNewest = () => {
    setPostSort("Newest");
    if (post === "Question") {
      fetchDataQuestion();
    }
    if (post === "Answers") {
      fetchDataAnswers();
    } else {
      let newDataAll = [...dataAll];
      newDataAll.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setDataAll(newDataAll);
    }
  };
  const handleEditProfile = ()=>{
    handleSettings()
  }

  const renderedQuestions = dataQuestion?.map((item, index) => {
    const timeAgo = moment(item.createdAt).fromNow();
    return (
      <div
        className={`p-2 flex items-center justify-between dark:border-[hsl(210,4.5%,30.5%)]  border-gray-400 border${
          index === dataQuestion.length - 1 ? "-b-0" : "-b"
        }`}
        key={index}
      >
        <div className="flex gap-3 items-center">
          <div>
            <img src={questionIcon} />
          </div>
          <div className="border border-gray-400 rounded py-1 px-4 dark:border-[hsl(210,4.5%,30.5%)]">
            {item.like}
          </div>
          <Link
            to={`/question/${item.id}`}
            className="text-blue-500 hover:text-blue-300"
            dangerouslySetInnerHTML={{ __html: item?.title }}
          ></Link>
        </div>
        <div className="text-gray-500">{timeAgo}</div>
      </div>
    );
  });

  const renderedAnswers = dataAnswers?.map((item, index) => {
    const timeAgo = moment(item.createdAt).fromNow();
    return (
      <div
        className={`p-2 flex items-center justify-between dark:border-[hsl(210,4.5%,30.5%)] border-gray-400 border${
          index === dataAnswers.length - 1 ? "-b-0" : "-b"
        }`}
        key={index}
      >
        <div className="flex gap-3 items-center">
          <div>
            <img src={answersIcon} />
          </div>
          <div className="border border-gray-400 rounded py-1 px-4 dark:border-[hsl(210,4.5%,30.5%)]">
            {item.like}
          </div>
          <Link
            to={`/question/${item.questionId}`}
            className="text-blue-500 hover:text-blue-300"
            dangerouslySetInnerHTML={{ __html: item?.content }}
          ></Link>
        </div>
        <div className="text-gray-500">{timeAgo}</div>
      </div>
    );
  });

  const renderedAll = dataAll?.map((item, index) => {
    const timeAgo = moment(item.createdAt).fromNow();

    return (
      <div
        className={`p-2 flex items-center justify-between dark:border-[hsl(210,4.5%,30.5%)] border-gray-400 border${
          index === dataAll?.length - 1 ? "-b-0" : "-b"
        }`}
        key={index}
      >
        <div className="flex gap-3 items-center">
          <div>
            {item.title ? (
              <img src={questionIcon} />
            ) : (
              <img src={answersIcon} />
            )}
          </div>
          <div className="border border-gray-400 rounded py-1 px-4 dark:border-[hsl(210,4.5%,30.5%)]">
            {item.like}
          </div>
          <Link
            to={
              item.questionId
                ? `/question/${item.questionId}`
                : `/question/${item.id}`
            }
            className="text-blue-500 hover:text-blue-300"
            dangerouslySetInnerHTML={{
              __html: item?.title ? item.title : item.content,
            }}
          ></Link>
        </div>
        <div className="text-gray-500">{timeAgo}</div>
      </div>
    );
  });

  const renderedTopTag = dataTags?.map((item, index) => {
    return (
      <div
        className={`p-3 flex items-center justify-between dark:border-[hsl(210,4.5%,30.5%)] border-gray-400 border${
          index === dataTags.length - 1 ? "-b-0" : "-b"
        }`}
        key={index}
      >
        <div className="flex gap-3 items-center">
          <div>
            <Link
              to={`/questions/tagged/${item?.tag?.nameTag}`}
              className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]"
            >
              {item?.tag?.nameTag}
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="text-gray-500">
            <span className="text-gray-700 font-semibold text-base">
              140,994
            </span>{" "}
            score{" "}
          </div>
          <div className="text-gray-500">
            <span className="text-gray-700 font-semibold text-base">
              140,994
            </span>{" "}
            score{" "}
          </div>
          <div className="text-gray-500">
            <span className="text-gray-700 font-semibold text-base">
              140,994
            </span>{" "}
            score{" "}
          </div>
        </div>
      </div>
    );
  });
  

  return (
    <div className="flex gap-6 text-[hsl(210,8%,35%)] dark:text-[hsl(210,4%,95%)]">
      <div className="basis-[22%] ">
        <div className="mb-4">
          <h3 className="text-black dark:text-[hsl(210,4%,95%)] text-xl mb-2">Stats</h3>
          <div className="p-1 border border-[hsl(210,8%,85%)] flex flex-wrap rounded dark:border-[hsl(210,4.5%,30.5%)]">
            <div className="basis-1/2 p-2">
              <div className="text-black dark:text-[hsl(210,4%,95%)]">1,405,951</div>
              <div className="text-xs">Reputation</div>
            </div>
            <div className="basis-1/2 p-2">
              <div className="text-black dark:text-[hsl(210,4%,95%)]">
                {userData?.ProfileUsers[0]?.point}
              </div>
              <div className="text-xs">Point</div>
            </div>
            <div className="basis-1/2 p-2">
              <div className="text-black dark:text-[hsl(210,4%,95%)]">{countQuestion}</div>
              <div className="text-xs">Questions</div>
            </div>
            <div className="basis-1/2 p-2">
              <div className="text-black dark:text-[hsl(210,4%,95%)]">{countAnswers}</div>
              <div className="text-xs">Answerss</div>
            </div>
            <div className=" p-2">
              <div>
                <img src={cupIcon} />
              </div>
              <span>
                top
                <span className="font-bold text-gray-600 dark:text-[hsl(210,4%,95%)]"> 0.01% </span>
                this year
              </span>
            </div>
          </div>
        </div>

        <div className="my-4 rounded">
          <h3 className="text-black dark:text-[hsl(210,4%,95%)] text-xl mb-2">Collectives</h3>
          <div>
            <div className="p-1 border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)]">
              <Link className="p-2 flex gap-2">
                <LogoGoogleIcloud />
                <div>
                  <div className="text-black dark:text-[hsl(210,4%,95%)]">Google Cloud</div>
                  <div className="text-xs">2021 • Member</div>
                </div>
              </Link>
            </div>
            <div className="p-1 border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)]">
              <div className="p-2">
                <LogoGoogleIcloud />
              </div>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-black text-xl mb-2 dark:text-[hsl(210,4%,95%)]">Communities</h3>
          <div>
            <div className="p-1 border border-[hsl(210,8%,85%)] rounded dark:border-[hsl(210,4.5%,30.5%)]">
              <Link className="m-2 flex justify-between items-center">
                <div className="flex items-center text-xs gap-1 text-blue-600">
                  <div className="w-3">
                    <img src={iconLogo} />
                  </div>
                  Stack Overflow
                </div>
                <div>1.2m</div>
              </Link>
              <Link className="m-2 flex justify-between items-center">
                <div className="flex items-center text-xs gap-1 text-blue-600">
                  <div className="w-3">
                    <img src={iconLogo} />
                  </div>
                  Stack Overflow
                </div>
                <div>1.2m</div>
              </Link>
              <Link className="m-2 flex justify-between items-center">
                <div className="flex items-center text-xs gap-1 text-blue-600">
                  <div className="w-3">
                    <img src={iconLogo} />
                  </div>
                  Stack Overflow
                </div>
                <div>1.2m</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="pb-3">
          <h3 className="text-black text-xl mb-2 dark:text-[hsl(210,4%,95%)]">About</h3>
          <div className="break-words ml-1">
            {userData?.ProfileUsers[0]?.aboutme ? (
              <div className="break-words">
                {userData?.ProfileUsers[0]?.aboutme && parse(userData?.ProfileUsers[0]?.aboutme)}
              </div>
              
            ) : (
              <div className="flex dark:bg-[hsl(0,0%,22.5%)] justify-center items-center text-center w-full rounded-lg border dark:border-[hsl(210,4.5%,30.5%)] border-[hsl(210,8%,90%)] bg-[hsl(210,8%,97.5%)]">
                <div className="p-8">
                Your about me section is currently blank. Would you <br/> like to add one? 
                  <span onClick={handleEditProfile} className="ml-1 text-blue-500 hover:text-blue-300 cursor-pointer">
                  Edit profile
                  </span>
                  .
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-black text-xl py-3 dark:text-[hsl(210,4%,95%)]">Badges</h3>
            {badgesData?.length > 0 ? (
              <div className="grid grid-cols-3 gap-6">
                <div className="p-1 border border-[hsl(210,8%,85%)] rounded dark:border-[hsl(210,4.5%,30.5%)]">
                  {badgesGold3item?.length > 0 ? (
                    <div className="p-2">
                      <div className="flex gap-3">
                        <img src={goldMedal} />
                        <div>
                          <div className="text-lg font-semibold">
                            {toltalPointGold}
                          </div>
                          <div className="text-xs">gold badges</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        {badgesGold3item?.map((badges) => {
                          const badgesCreatedAt = moment(badges?.createdAt)
                            .utcOffset("+07:00")
                            .calendar();
                          return (
                            <div
                              key={badges.id}
                              className="flex justify-between items-center text-[10px] mb-2 mt-4"
                            >
                              <Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded dark:border-[hsl(210,4.5%,30.5%)]">
                                <RxDotFilled
                                  className="text-yellow-400"
                                  size={18}
                                />
                                {badges.BadgesQuestion.badgesName}
                              </Link>
                              <div>{badgesCreatedAt}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-3 gap-2">
                      <div className="w-24">
                        <img className="w-full" src={goldMedalBig} />
                      </div>
                      <div>This user doesn’t have any silver badges yet.</div>
                    </div>
                  )}
                </div>

                <div className="p-1 border border-[hsl(210,8%,85%)] rounded dark:border-[hsl(210,4.5%,30.5%)]">
                  {badgesSilver3item?.length > 0 ? (
                    <div className="p-2">
                      <div className="flex gap-3">
                        <img src={silverMedal} />
                        <div>
                          <div className="text-lg font-semibold">
                            {toltalPointSilver}
                          </div>
                          <div className="text-xs">silver badges</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        {badgesSilver3item?.map((badges) => {
                          const badgesCreatedAt = moment(badges?.createdAt)
                            .utcOffset("+07:00")
                            .calendar();
                          return (
                            <div
                              key={badges.id}
                              className="flex justify-between items-center text-[10px] mb-2 mt-4"
                            >
                              <Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded dark:border-[hsl(210,4.5%,30.5%)]">
                                <RxDotFilled
                                  className="text-gray-400"
                                  size={18}
                                />
                                {badges.BadgesQuestion?.badgesName
                                  ? badges.BadgesQuestion?.badgesName
                                  : badges.badgesName}
                              </Link>
                              <div>{badgesCreatedAt}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-3 gap-2">
                      <div className="w-24">
                        <img className="w-full" src={silverMedalBig} />
                      </div>
                      <div>This user doesn’t have any silver badges yet.</div>
                    </div>
                  )}
                </div>

                <div className="p-1 border border-[hsl(210,8%,85%)] rounded dark:border-[hsl(210,4.5%,30.5%)]">
                  <div className="p-2">
                    <div className="flex gap-3">
                      <img src={bronzeMedal} />
                      <div>
                        <div className="text-lg font-semibold">
                          {toltalPointBronze}
                        </div>
                        <div className="text-xs">bronze badges</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      {badgesBronze3item?.length > 0 ? (
                        badgesBronze3item?.map((badges) => {
                          const badgesCreatedAt = moment(badges?.createdAt)
                            .utcOffset("+07:00")
                            .calendar();
                          return (
                            <div
                              key={badges.id}
                              className="flex justify-between items-center text-[10px] mb-2 mt-4"
                            >
                              <Link className="flex items-center  pr-4 border dark:border-[hsl(210,4.5%,30.5%)] border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded">
                                <RxDotFilled
                                  className="text-orange-300"
                                  size={18}
                                />
                                {badges?.BadgesQuestion.badgesName}
                              </Link>
                              <div>{badgesCreatedAt}</div>
                            </div>
                          );
                        })
                      ) : (
                        <h2></h2>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dark:bg-[hsl(0,0%,22.5%)] flex justify-center items-center text-center w-full rounded-lg dark:border-[hsl(210,4.5%,30.5%)] border border-[hsl(210,8%,90%)] bg-[hsl(210,8%,97.5%)]">
                <div className="p-8">
                  This user has not earned any{" "}
                  <Link className="text-blue-500 hover:text-blue-300">
                    badges
                  </Link>
                  .
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-black text-xl pt-3 dark:text-[hsl(210,4%,95%)]">Top tags</h3>
            </div>
            <div className="text-gray-500">
              <Link className="text-gray-500 hover:text-gray-700">
                View all Tags
              </Link>
            </div>
          </div>
          <div className="border border-gray-400 rounded-md dark:border-[hsl(210,4.5%,30.5%)]">
            {renderedTopTag}
          </div>
        </div>

        <div>
          <div className="flex justify-between mt-5">
            <div>
              <div>
                <h3 className="text-black text-xl pt-3 dark:text-[hsl(210,4%,95%)]">Newest posts</h3>
              </div>
              <div className="text-gray-500">
                View all{" "}
                <Link className="text-blue-500 hover:text-blue-300">
                  questions
                </Link>{" "}
                and{" "}
                <Link className="text-blue-500 hover:text-blue-300">
                  Answerss
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[10px]">
              <div className="flex justify-end py-4 mt-2 items-center cursor-pointer text-[hsl(210,8%,45%)] dark:text-[hsl(210,7%,78.5%)] dark:border-[hsl(210,4.5%,30.5%)]">
                <div
                  onClick={handleClickAll}
                  style={{
                    background: post === "All" && "hsl(210,8%,90%)",
                    color: post === "All" && "black",
                    border: post === "All" && "1px solid hsl(210,8%,55%)",
                  }}
                  className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] px-2 py-1 rounded-l hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
                >
                  All
                </div>
                <div
                  onClick={handleClickQuestion}
                  style={{
                    background: post === "Question" && "hsl(210,8%,90%)",
                    color: post === "Question" && "black",
                    border: post === "Question" && "1px solid hsl(210,8%,55%)",
                  }}
                  className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] px-2 py-1 flex gap-1 hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
                >
                  <div>Question</div>
                </div>
                <div
                  onClick={handleClickAnswers}
                  style={{
                    background: post === "Answers" && "hsl(210,8%,90%)",
                    color: post === "Answers" && "black",
                    border: post === "Answers" && "1px solid hsl(210,8%,55%)",
                  }}
                  className="border rounded-r border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] px-2 py-1 hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
                >
                  Answers
                </div>
              </div>

              <div className="flex justify-end py-4 mt-2 items-center cursor-pointer text-[hsl(210,8%,45%)] dark:text-[hsl(210,7%,78.5%)] dark:border-[hsl(210,4.5%,30.5%)]">
                <div
                  onClick={handleClickScore}
                  style={{
                    background: postSort === "Score" && "hsl(210,8%,90%)",
                    color: postSort === "Score" && "black",
                    border: postSort === "Score" && "1px solid hsl(210,8%,55%)",
                  }}
                  className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] px-2 py-1 rounded-l hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
                >
                  Score
                </div>
                <div
                  onClick={handleClickNewest}
                  style={{
                    background: postSort === "Newest" && "hsl(210,8%,90%)",
                    color: postSort === "Newest" && "black",
                    border:
                      postSort === "Newest" && "1px solid hsl(210,8%,55%)",
                  }}
                  className="border rounded-r border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] px-2 py-1 flex gap-1 hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
                >
                  <div>Newest</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-md">
            {post === "Question"
              ? renderedQuestions
              : post === "Answers"
              ? renderedAnswers
              : renderedAll}
          </div>
        </div>
      </div>
    </div>
  );
}
