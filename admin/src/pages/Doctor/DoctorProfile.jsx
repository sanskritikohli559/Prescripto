import React from 'react'
import { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {

    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      const { data }= await axios.post(backendUrl + '/api/doctor/updateProfile', updateData, {headers:{dToken}})

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
    
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])
  return profileData && (
    <div className='flex flex-col gap-4 m-5'>
      <div className='flex flex-col sm:flex-row gap-5'>
        <div><img className='bg-primary/10 w-full sm:max-w-72 rounded-lg' src={profileData.image} alt="" /></div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white'>
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>

          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About:</p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{profileData.about}</p>
          </div>

          <p className='text-gray-600 font-medium mt-4'>Appointment fee : <span className='text-gray-800'>{currency} {isEdit ? <input type="number" onChange={(e)=>setProfileData(prev=> ({...prev, fees: e.target.value}))} value={profileData.fees} /> : profileData.fees}</span></p>

          <div className='mt-4'>
            <p className='font-medium'>Address:</p>
            <p className='text-sm text-gray-600'>{isEdit ? <input type="text" onChange={(e)=>setProfileData(prev => ({...prev, address: {...prev.address, line1:e.target.value}}))} value={profileData.address.line1}/> : profileData.address.line1}</p>

            <p className='text-sm text-gray-600'>{isEdit ? <input type="text" onChange={(e)=>setProfileData(prev => ({...prev, address: {...prev.address, line2:e.target.value}}))} value={profileData.address.line2}/> : profileData.address.line2}</p>
          </div>

          <div className='flex items-center gap-2 mt-4'>
            <input onChange={()=> isEdit && setProfileData(prev => ({...prev, available: !prev.available}))} className='w-4 h-4' checked={profileData.available} type="checkbox" name="" id="available" />
            <label htmlFor="available">Available</label>
          </div>
          {
            isEdit 
            ? <button onClick={updateProfile} className='border border-primary px-8 py-2 rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button>
            : <button onClick={()=>setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
          }
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile