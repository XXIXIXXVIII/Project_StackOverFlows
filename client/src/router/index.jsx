import DefaultLayout from "../layout/DefaultLayout";
import HeaderOnlyLayout from "../layout/HeaderOnlyLayout";
import AllUserPage from "../page/AllUserPage";
import Companies from "../page/Companies";
import HomeLogin from "../page/HomeLogin";
import HomePublic from "../page/HomePublic";
import Login from "../page/Login";
import Questions from "../page/Questions";
import Signup from "../page/Signup";
import TagDetail from "../page/TagDetail";
import Tags from "../page/Tags";
import UserDetail from "../page/UserDetail";
import UserTagsLayout from './../layout/UserTagsLayout';
import QuestionsLayout from './../layout/QuestionsLayout';
import QuestionAsk from './../page/QuestionAsk';
import QuestionDetail from "../page/QuestionDetail";

const privateRouters = [
  {part:'/', component:HomeLogin, layout:QuestionsLayout },
  
]
const publicRouter = [
  {part: '/signup', component: Signup , layout:HeaderOnlyLayout},
  {part: '/login', component: Login, layout:HeaderOnlyLayout},
]

const routerNoNeedLogin = [
  {part:'/questions/tagged/:tagName', component:TagDetail, layout:QuestionsLayout },
  {part:'/question/:questionId', component:QuestionDetail, layout:UserTagsLayout },
  {part:'/questions/ask', component:QuestionAsk, layout:DefaultLayout },
  {part: '/', component: HomePublic},
  {part: '/users/:id/:username', component: UserDetail, layout:UserTagsLayout},
  {part: '/users', component: AllUserPage, layout:UserTagsLayout},
  {part: '/tags', component: Tags, layout:UserTagsLayout},
  {part: '/questions', component: Questions, layout:QuestionsLayout},
  {part: '/jobs/companies', component: Companies, layout:UserTagsLayout},
]

export { privateRouters, publicRouter, routerNoNeedLogin }