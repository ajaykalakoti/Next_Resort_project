
// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// const CalenderComponent=()=>{
// const [showCalender,setShowCalender]=useState(false);

//     const [date,setDate]=useState([
//         {
//             startDate:new Date(),
//             endDate : new Date(),
//             key:'selection',
//         },
//     ]);

//     const [selectedDates,setSelectedDates]=useState(null);

//     const handleSelectionDates =async()=>{
//         const startDate =date[0].startDate.toLocaleDateString()
//         const endDate = date[0].endDate.toLocaleDateString();

//         setSelectedDates(`Selected Dates:${startDate} - ${endDate} `);

//         const bookingDates ={startDate,endDate};

//         console.log("selectedDates from calender",bookingDates);
//     }


//     return (
//       <div>
//         <div className="currentDate" onClick={()=>setShowCalender(!showCalender)}>
//           {!selectedDates && (
//              <>{`${startDate} - ${endDate}`}</>
//            )}
//           {selectedDates && (
//              <div>{selectedDates}</div> 
//            )}
//         </div>
//         {showCalender && (
//           <DateRange
//             editableDateInputs={true}
//             onChange={(item) => setDate([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={date}
//             color="white"
//           />
//         )}
//         <button onClick={handleSelectionDates}>Select Dates</button>
//       </div>
//     );
// };
// export default CalenderComponent


// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

// const CalenderComponent = () => {
//   const [showCalender, setShowCalender] = useState(false);

//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const [selectedDates, setSelectedDates] = useState(null);

//   const handleSelectionDates = async () => {
//     const startDate = date[0].startDate.toLocaleDateString();
//     const endDate = date[0].endDate.toLocaleDateString();

//     setSelectedDates(`Selected Dates: ${startDate} - ${endDate}`);

//     const bookingDates = { startDate, endDate };

//     console.log("selectedDates from calender", bookingDates);
//   };

//   // Define startDate and endDate here for rendering before selection
//   const startDate = date[0].startDate.toLocaleDateString();
//   const endDate = date[0].endDate.toLocaleDateString();

//   return (
//     <div>
//       <div
//         className="currentDate"
//         onClick={() => setShowCalender(!showCalender)}
//       >
//         {!selectedDates && <>{`${startDate} - ${endDate}`}</>}
//         {selectedDates && <div>{selectedDates}</div>}
//       </div>
//       {showCalender && (
//         <DateRange
//           editableDateInputs={true}
//           onChange={(item) => setDate([item.selection])}
//           moveRangeOnFirstSelection={false}
//           ranges={date}
//           color="white"
//         />
//       )}
//       <button onClick={handleSelectionDates}>Select Dates</button>
//     </div>
//   );
// };

// export default CalenderComponent;


import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalenderComponent = ({onDatesSelect}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [selectedDates, setSelectedDates] = useState(null);
  const [displayStartDate, setDisplayStartDate] = useState("");
  const [displayEndDate, setDisplayEndDate] = useState("");

  useEffect(() => {
    const startDate = date[0].startDate.toLocaleDateString();
    const endDate = date[0].endDate.toLocaleDateString();
    setDisplayStartDate(startDate);
    setDisplayEndDate(endDate);
  }, [date]);

  const handleSelectionDates = async () => {
    const startDate = date[0].startDate.toLocaleDateString();
    const endDate = date[0].endDate.toLocaleDateString();

    setSelectedDates(`Selected Dates: ${startDate} - ${endDate}`);
    setShowCalender(false);

    const bookingDates = { startDate, endDate };

    console.log("selectedDates from calender", bookingDates);

    if(onDatesSelect){
      onDatesSelect(bookingDates)
    }
  };
    const currentDate =new Date().toDateString();
    const nextDate =new Date();
    nextDate.setDate(nextDate.getDate()+1)
     
    const formattedDate =nextDate.toDateString()

  return (
    <div className="calenderSection">
      <div
        className="currentDate"
        onClick={() => setShowCalender(!showCalender)}
      >
        {!selectedDates && <>{`${currentDate} - ${formattedDate}`}</>}
        {selectedDates && <div className="" style={{color:"red"}}>{selectedDates}</div>}
      </div>
      {showCalender && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="dateRange"
        />
      )}
      <button onClick={handleSelectionDates} className="calenderButton">Select Dates</button>
    </div>
  );
};

export default CalenderComponent;
