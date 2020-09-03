import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
   return <div className={s.content}>
      <div>
      <img src='https://sm.ign.com/ign_pl/screenshot/default/zoe-saldana-in-avatar_4aq4.jpg'/>
      </div>
      <div>
         ava + description
      </div>
     <MyPosts />
   </div>

}

export default Profile
