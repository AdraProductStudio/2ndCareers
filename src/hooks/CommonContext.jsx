import { createContext, useEffect, useState } from "react";
import axios from "axios";


const CommonContext = createContext();

export const DataProvider = ({ children }) => {
    // home page states 
    const [gettingResponse, setGettingResponse] = useState(false)
    const [FilterArray, setFilterArray] = useState([]);
    const [cardArray, setCardArray] = useState([]);
    const [userNavbarinfo, setUserNavinfo] = useState([]);
    const [cardArrayDuplicate, setCardArrayDuplicate] = useState([]);
    const [selectedCardData, setSelectedCardData] = useState([]);
    const [selectedSkeleton, setSelectedSkeleton] = useState(false);
    const [applicationRequirements, setApplicationRequirements] = useState([]);
 

    const handleGetApplicationRequirements = async (value) => {
        console.log(value)
        setApplicationRequirements([])
        let getRequirements = { job_id: value }
        const token = localStorage.getItem("Token")
        try {
          await axios.post("https://api.2ndcareers.com/professional_onClick_apply_job", getRequirements, {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
            .then((res) => {
              // console.log(res.data)
              if(res.data.error_code === 0){
                // console.log(res.data.data)
                setApplicationRequirements(res.data.data)
                setGettingResponse(true)
                setSelectedSkeleton(false)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
        catch (err) {
          console.log(err)
        }
      }


    return (
        <CommonContext.Provider value={{
            cardArray,
            setCardArray,
            FilterArray,
            setFilterArray,
            selectedCardData,
            setSelectedCardData,
            gettingResponse,
            setGettingResponse,
            cardArrayDuplicate,
            setCardArrayDuplicate,
            selectedSkeleton,
            setSelectedSkeleton,
            userNavbarinfo,
            setUserNavinfo,
            applicationRequirements,
            setApplicationRequirements,
            handleGetApplicationRequirements
        }}
        >


            {children}
        </CommonContext.Provider>
    )
}


export default CommonContext;