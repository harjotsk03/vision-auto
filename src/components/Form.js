import React, { useState } from 'react';
import dayjs from 'dayjs'; // Import Dayjs
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const formatPhoneNumber = (input) => {
  // Remove all non-digit characters from the input
  const cleaned = ('' + input).replace(/\D/g, '');

  // Apply the phone number format
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  // If the input doesn't match the format, return it as is
  return input;
};

export const Form = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [value, setValue] = useState(dayjs()); // Initialize value state with current date


    const handlePhoneNumberChange = (e) => {
      // Format the phone number as the user types
      const formattedPhoneNumber = formatPhoneNumber(e.target.value);
      setPhoneNumber(formattedPhoneNumber);
    };

    return (
        <form className="bg-transparent main2 flex flex-col p-2 mt-4 xl:mt-0 xl:p-10  rounded-md">
            <label className="text-white ml-2">Full Name</label>
            <input required type="text" className="inputStyle text-xl m-2 mb-4 pl-3 p-2 rounded-md" />
            <label className="text-white ml-2">Email</label>
            <input required type="email" className="inputStyle text-xl m-2 mb-4 pl-3 p-2 rounded-md " />    
            <label  className="text-white ml-2">Phone Number</label>        
            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="inputStyle text-xl m-2 pl-3 p-2 rounded-md"
            />
            <div className='dateNtimeContainer'>
                <div className="relative flex flex-col m-2 mr-0 ml-2">
                    <label className="text-white">Choose Level</label>
                    <select id='dateNtime' className="inputStyle appearance-none text-xl bg-white border border-gray-300 rounded-md py-2 mt-1.5 pl-3 pr-10 ">
                        <option value="" disabled selected></option>
                        <option value="option1">Basic</option>
                        <option value="option2">Elite</option>
                        <option value="option1">Premium</option>
                    </select>
                </div>
                <div className="relative  flex flex-col m-2 ml-0">
                    <label className=" text-white ml-2">Choose Detail</label>
                    <select id='dateNtime' className="inputStyle appearance-none text-xl bg-white border border-gray-300 rounded-md py-2 mt-1.5 pl-3 pr-10  ml-2 ">
                        <option value="" disabled selected></option>
                        <option value="option2">Interior</option>
                        <option value="option2">Exterior</option>
                        <option value="option3">Exterior and Interior</option>
                    </select>
                </div>
            </div>
            <div className='dateNtimeContainer'>
                <div className="relative flex flex-col m-2 mr-0 ml-2">
                    <label className="text-white">Choose Date</label>
                    <select id='dateNtime' className="inputStyle appearance-none text-xl bg-white border border-gray-300 rounded-md py-2 mt-1.5 pl-3 pr-10 ">
                        <option value="" disabled selected></option>
                        <option value="option1">Saturday, Mar 2</option>
                        <option value="option2">Sunday, Mar 3</option>
                        <option value="option1">Saturday, Mar 9</option>
                        <option value="option2">Sunday, Mar 10</option>
                    </select>
                </div>
                <div className="relative  flex flex-col m-2 ml-0">
                    <label className=" text-white ml-2">Choose Time</label>
                    <select id='dateNtime' className="inputStyle appearance-none text-xl bg-white border border-gray-300 rounded-md py-2 mt-1.5 pl-3 pr-10  ml-2 ">
                        <option value="" disabled selected></option>
                        <option value="option2" disabled>9:00 AM</option>
                        <option value="option2">12:00 PM</option>
                        <option value="option3">3:00 PM</option>
                    </select>
                </div>
            </div>
            <button className="button inputStyle bg-gray-300 main2 border-2 border-gray-300 text-black font-bold py-2 px-4 m-2 mt-4 rounded-md">
                Submit
            </button>
        </form>

    );
};
