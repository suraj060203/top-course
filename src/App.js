import {React, useState, useEffect} from "react";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl, filterData} from "./data";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  
async function fetchData() {
  setLoading(true);
  try {
    let response = await fetch(apiUrl); // Fetch data from the API
    let output = await response.json(); // Parse the JSON response
    // Output
    setCourses(output.data); // Set the courses state with the fetched data
    console.log(output.data); // Log the output to the console
    toast.success("Data fetched successfully!"); // Show a success toast notification
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors to the console
    toast.error("Failed to fetch data!"); // Show an error toast notification
  }
  setLoading(false); // Set loading to false after fetching data
}

useEffect(() => {
  fetchData(); // Call the fetchData function when the component mounts
}, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div> 
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>  
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div> 
    </div>
    
  );
};

export default App;
