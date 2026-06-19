import Navbar from '../Components/UI/Navbar'
import Section from '../Components/UI/Section'

import CharacterCounter from '../Components/UseStateAssigment/CharacterCounter'
import ToggleButton from '../Components/UseStateAssigment/ToggleButton'
import ThemeChanger from '../Components/UseStateAssigment/ThemeChanger'
import ThemeToggle from '../Components/UseStateAssigment/ThemeToggle'
import Calculator from '../Components/UseStateAssigment/Calculator'

import LoginToggle from "../Components/ConditionalRenderingAssign/LoginToggle"
import ResultCard from "../Components/ConditionalRenderingAssign/ResultCard"
import UserDashboard from "../Components/ConditionalRenderingAssign/UserDashboard"
import ShowPassword from "../Components/ConditionalRenderingAssign/ShowPassword"
import VotingEligibility from "../Components/ConditionalRenderingAssign/VotingEligibility"
import ProductStockChecker from "../Components/ConditionalRenderingAssign/ProductInventory"
import StudentLoader from "../Components/ConditionalRenderingAssign/StudentLoader"


import TodoApp from "../Components/TodoList/TodoApp"
import EmployeeManagement from "../Components/TodoList/EmployeeManagement"
import ProductCardGenerator from "../Components/TodoList/ProductCardGenerator"
import StudentCardGenerator from "../Components/TodoList/StudentCardGenerator"
import EmployeeManagementSystem from "../Components/TodoList/EmployeeManagementSystem"


import CounterTitle from "../Components/UseEffectAssigment/CounterTitle"
import UsersList from "../Components/UseEffectAssigment/UsersList"
import LiveSearch from "../Components/UseEffectAssigment/LiveSearch"
import Timer from "../Components/UseEffectAssigment/Timer"
import ImageSlider from "../Components/UseEffectAssigment/ImageSlider"

import VideoController from "../Components/UseRefAssignment/VideoController"
import ScrollPage from "../Components/UseRefAssignment/ScrollPage"
import AutoFocusSearch from "../Components/UseRefAssignment/AutoFocusSearch"
import ImageGallery from '../Components/UseRefAssignment/ImageGallery'

import SignupForm from "../Components/Assigment/SignupForm"
import ChatBox from "../Components/Assigment/ChatBox"

import MiniEcommerce from '../Components/UseContextAssigment/AddtoCart/MiniEcommerce'
import ExpenceTrakerApp from '../Components/UseContextAssigment/ExpencedTraker/ExpenseTrackerApp'
import CollegeWebsite from '../Components/BrowserRouterAssigment/CollegeWebsite/CollegeWebsite'
import HospitalWebsite from '../Components/BrowserRouterAssigment/HospitalWebsite/HospitalWebsite'
import StudentManagement from '../Components/UseNavigateUseParamsAssigment/StudentManagementSystem/StudentManagement'
import MovieInformationSystem from '../Components/UseNavigateUseParamsAssigment/MovieInformationSystemAssigment/MovieInformationSystem'

const AssignmentPage = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <Navbar />

       <h1 className="font-bold text-center text-4xl mb-3">React Assignment Page</h1>
      <Section id="useState" title="1. useState assignment">
        <CharacterCounter />
        <ToggleButton />
        <ThemeChanger />
        <ThemeToggle />
        <Calculator />
      </Section>

      <Section
        id="conditional"
        title="2. Conditional Rendering assignment"
      >
        <LoginToggle />
        <ResultCard />
        <UserDashboard />
        <ShowPassword />
        <VotingEligibility />
        <ProductStockChecker />
        <StudentLoader />
      </Section>

      <Section id="crud" title="3. CRUD assignment">
        <TodoApp />
        <ProductCardGenerator />
        <EmployeeManagement />
        <StudentCardGenerator />
        <EmployeeManagementSystem />
      </Section>

      <Section id="useEffect" title="4. useEffect assignment">
        <CounterTitle />
        <UsersList />
        <LiveSearch />
        <Timer />
        <ImageSlider />
      </Section>

      <Section id="useRef" title="5. useRef assignment">
        <VideoController />
        <ScrollPage />
        <AutoFocusSearch />
        <ImageGallery />
      </Section>


      <Section id="hooks" title="5. useRef useEffect useState assignment">
        <SignupForm />
        <ChatBox />
      </Section>

      <Section id="useContext" title="6. useContext assignment ">
       <MiniEcommerce />
       <ExpenceTrakerApp />
      </Section>

      <Section id="reactRouter" title="7.  React Router ">
        <CollegeWebsite />
        <HospitalWebsite />
      </Section>

      <Section  id="Navigate&Params" title="8.  useNavigate + useParams ">
          <StudentManagement />
          <MovieInformationSystem />
      </Section>
    </div>
  );
};

export default AssignmentPage;