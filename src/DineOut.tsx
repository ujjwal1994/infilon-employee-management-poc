import React, { useState } from 'react'
import {MapPin} from 'lucide-react'
import "./styles.css"

const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad','Pune','jaipur','Vadodara','Mumbia','Kolkata','Lucknow','Bangalore','Ahmedabad','Indore','Kochi','Chennai','Chandigarh','Udaipur','Surat','Goa','Agra','Ludhiana']
  const restaurants = [
    {
      name: "The G.T. Road",
      location: "Connaught Place, Central Delhi",
      rating: 4.3,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/v/f/p31393-171569505266436dcc88e82.jpg?tr=tr:n-large",
      link: "delhi/the-gt-road-connaught-place-central-delhi-31393"
    },
    {
      name: "My Bar Headquarters",
      location: "Connaught Place, Central Delhi",
      rating: 4.0,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/d/f/p19636-16463919576221f295ae1f1.jpg?tr=tr:n-large",
      link: "delhi/my-bar-headquarters-connaught-place-central-delhi-19636"
    },
    {
      name: "Dhaba Estd 1986",
      location: "Connaught Place, Central Delhi",
      rating: 4.0,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/u/b/p919-150182627559840ce33f574.jpg?tr=tr:n-large",
      link: "delhi/dhaba-estd-1986-delhi-connaught-place-central-delhi-65288"
    },
    {
      name: "Ghoomar Traditional",
      location: "Connaught Place, Central Delhi",
      rating: 4.1,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/e/z/p53380-15544492915ca7038b700f1.jpg?tr=tr:n-large",
      link: "delhi/ghoomar-traditional-thali-restaurant-connaught-place-central-delhi-53380"
    },
    {
      name: "Sandoz",
      location: "Connaught Place, Central Delhi",
      rating: 3.9,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/e/u/p80493-16064603115fc0a397716de.jpg?tr=tr:n-large",
      link: "delhi/sandoz-connaught-place-central-delhi-80493"
    },
    {
      name: "Barbeque Nation",
      location: "Connaught Place, Central Delhi",
      rating: 4.3,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/l/m/p532-168239919964475fdfdb926.jpg?tr=tr:n-large",
      link: "delhi/barbeque-nation-connaught-place-central-delhi-10696"
    },
    {
      name: "Subway",
      location: "Connaught Place, Central Delhi",
      rating: 5.0,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/t/h/p16-16457922496218cbf9e6961.jpg?tr=tr:n-large",
      link: "delhi/subway-connaught-place-central-delhi-56819"
    },
    {
      name: "Kill The Bill",
      location: "Connaught Place, Central Delhi",
      rating: 4.3,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/l/x/p29876-1618634149607a65a541b42.JPG?tr=tr:n-large",
      link: "delhi/kill-the-bill-connaught-place-central-delhi-29876"
    },
    {
      name: "Gin & Juliet",
      location: "Connaught Place, Central Delhi",
      rating: 4.0,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/l/q/p971-16946056676501a163bf712.jpg?tr=tr:n-large",
      link: "delhi/gin-juliet-connaught-place-central-delhi-971"
    },
    {
      name: "Berco's - If You Love",
      location: "Connaught Place, Central Delhi",
      rating: 4.3,
      imageUrl: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/t/u/p237-16468990666229af7a72b08.jpg?tr=tr:n-large",
      link: "delhi/bercos-if-you-love-chinese-connaught-place-central-delhi-237"
    },
  ];

const categories = [{name:'Buffet',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"},
   {name:'Pocket Friendly',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png"}, 
   {name:'Pet Friendly',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png"},
    {name:'Must Visit',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png"}, 
    {name:'Family Time',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/family_time.png"},
     {name:'Pure Veg',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pure_veg.png"}, 
     {name:'New On Dineout',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png"}, 
     {name:'Happiest Hours',img:"https://im1.dineout.co.in/images/uploads/misc/2020/May/8/happiest_hour.png"}]

export default function DineoutPage() {
  const [inputFocused,setFocused] = useState(false)
  return (
    <div className="min-h-screen">
      <header className="bg-white max-w-[1110px] mx-auto">
        <div className="container mx-auto px-4 py-[18px] pt-2 flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <img src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png" alt="Swiggy Dineout Logo" className="h-[38px] w-[125px]" />
            <div className="relative">
              <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select className="pl-8 h-8 pr-4 py-0 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-[210px]">
               {cities.map((city) =>{
                return <option>{city}</option>
               })} 
              </select>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4 w-[600px] text-[14px] justify-between">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-[#FF645A]  font-bold">Home</a>
            <a href="#" className="text-gray-900 hover:text-gray-900">Book a Table</a>
            <a href="#" className="text-gray-900 hover:text-gray-900">Blog</a>
            <button className="bg-[#FF645A] w-[108px] text-white px-4 py-1 font-bold rounded-md hover:bg-[#FF645A] transition duration-300">Login</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url("https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg")'}}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-[18px] md:p-0">
            <h1 className="text-4xl font-bold mb-4">It's Now Safe To <span className='text-[#FF645A]'>Crave!</span></h1>
            <div className="w-full max-w-[1110px] mx-auto relative">
              <div className='absolute top-[15px] md:top-[20px] left-[14px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="#FF645A" fill-rule="nonzero" stroke="#FF645A" stroke-width="0.1" d="M11.538 10.287l1.483 1.434 1.045 1.01c.16.155.235.357.245.57.01.216-.099.417-.245.57a.859.859 0 0 1-.589.237.874.874 0 0 1-.59-.237l-.377-.365-1.654-1.6-.499-.482c-.143.105-.29.204-.44.296a6.493 6.493 0 0 1-.998.477 5.978 5.978 0 0 1-2.088.394 6.162 6.162 0 0 1-1.73-.223 6.06 6.06 0 0 1-1.538-.668 5.872 5.872 0 0 1-1.26-1.029C1.564 9.86 1.03 8.853.859 7.778a6.28 6.28 0 0 1-.09-.94c-.001-.32.035-.634.08-.951.08-.549.263-1.067.5-1.569.464-.975 1.245-1.803 2.169-2.388.464-.293.984-.52 1.513-.676.243-.071.492-.125.744-.161.326-.047.652-.084.982-.084.225 0 .214 1.613 0 1.613-.232 0-.464.015-.695.045l.223-.029c-.453.06-.895.176-1.316.348l.198-.08a5.269 5.269 0 0 0-1.135.642l.168-.126a5.16 5.16 0 0 0-.936.906l.13-.163a5.017 5.017 0 0 0-.664 1.098l.083-.192a4.906 4.906 0 0 0-.36 1.273l.03-.215a4.946 4.946 0 0 0 0 1.344l-.03-.215c.062.438.182.865.36 1.272a27.35 27.35 0 0 1-.083-.192c.172.391.396.76.664 1.098l-.13-.162c.27.338.586.643.936.906l-.168-.127c.349.26.731.476 1.135.643a29.341 29.341 0 0 0-.198-.081c.42.17.863.289 1.316.348l-.223-.028c.46.059.923.059 1.382.001l-.223.028c.45-.059.89-.173 1.308-.342l-.199.08a5.22 5.22 0 0 0 1.157-.652l-.168.127a5.128 5.128 0 0 0 .933-.905l-.13.163c.27-.341.496-.715.67-1.112l-.084.193c.174-.4.292-.82.353-1.25l-.029.215a4.944 4.944 0 0 0 0-1.359l.03.215a4.91 4.91 0 0 0-.354-1.25l.084.192a5.044 5.044 0 0 0-.67-1.111l.13.162a5.181 5.181 0 0 0-.933-.904l.168.126A5.362 5.362 0 0 0 8.329 2.9l.2.081a5.332 5.332 0 0 0-1.309-.343l.223.029a5.336 5.336 0 0 0-.687-.045c-.226 0-.214-1.613 0-1.613.385.002.77.043 1.148.11.313.054.62.136.916.247a5.88 5.88 0 0 1 2.407 1.585c.396.439.74.925.98 1.46.137.308.262.617.349.942.086.324.137.659.168.992a5.532 5.532 0 0 1-.148 1.825c-.063.261-.15.518-.257.765-.13.304-.27.6-.449.88-.102.162-.213.32-.332.472z"></path></svg>
              </div>
              <input
                type="text"
                placeholder="Search for Restaurants, Cuisines, Location..."
                className="w-full py-3 px-4 h-[60px]  placeholder-gray-900 pr-12 pl-12 placeholder:text-[18px] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
                onFocus={() =>setFocused(true)}
                onBlur={() =>setFocused(false)}
              />
              <button className="w-[140px] text-[18px] font-bold h-[42px] absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF645A] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
                Search
              </button>
              {inputFocused && <div className="flex gap-4 absolute bottom-[-180px]">
           <img className='shadow-lg rounded-[5px]' src="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small" width={134}  height={180}/>
           <img className='shadow-lg rounded-[5px]' src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small" width={134}  height={180}/>
           <img className='shadow-lg rounded-[5px]' src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small" width={134}  height={180}/>
           <img className='shadow-lg rounded-[5px]' src='https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small' width={134}  height={180}/>
          </div>}   
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Best offers</h2>
          <div className="flex gap-4 flex-wrap">
           <img className='shadow-lg rounded-[5px]' src="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small" width={134}  height={180}/>
           <img className='shadow-lg rounded-[5px]' src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small" width={134}  height={180}/>
           <img className='shadow-lg rounded-[5px]' src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small" width={134}  height={180}/>
           <img className='shadow-lg rounded-[5px]' src='https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small' width={134}  height={180}/>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Restaurants Near You</h2>
            <a href="#" className="text-orange-500 hover:underline">See All</a>
          </div>
          <div className="hideSlider">
             <ul className="flex overflow-x-auto w-full hideSlider pb-[10px]">
      {restaurants.map((restaurant, index) => (
        <li key={index} className="flex-none w-64 mx-2">
          <a href={restaurant.link}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={restaurant.imageUrl} 
                alt={restaurant.name} 
                className="w-full h-36 object-cover" 
              />
              <div className="p-4 relative">
                <h4 className="text-lg font-semibold">{restaurant.name}</h4>
                <p className="text-gray-600 text-[12px]">{restaurant.location}</p>
                <div className="mt-2 text-white text-center flex items-center justify-center font-semibold w-9 h-6 rounded-[2px] text-[12px] bg-[#8cbb0f] absolute top-6 right-2">{restaurant.rating}</div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md flex items-center space-x-2">
                <img src={category.img} alt={category.name} className="w-10 h-10" />
                <span className='text-[#666]'>{category.name}</span>
              </div>
            ))}
          </div>
        </section>
          <hr className='my-15'/>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <h3 className="font-semibold mb-4 text-[#FF645A]">Available in</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {cities.map((city, index) => (
                <a key={index} href="#" className="text-[#666] hover:text-gray-900">{city}</a>
              ))}
            </div>
          </div>
        </section>
      </main>
                 <hr/>

      <footer className="text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 my-[60px]">
            <div>
              <h3 className="font-semibold mb-2 text-[#FF645A]">Discover</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-[#666]">Trending Restaurants</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#FF645A]">About</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-[#666]">About Us</a></li>
                <li><a href="#" className="text-[#666]">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#FF645A]">Top Cuisines</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-[#666]">Chinese</a></li>
                <li><a href="#" className="text-[#666]">Italian</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#FF645A]">Top Facilities</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-[#666]">Fine Dining</a></li>
                <li><a href="#" className="text-[#666]">5 Star</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#FF645A]">Top Locations</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-[#666]">Connaught Place</a></li>
                <li><a href="#" className="text-[#666]">Khan Market</a></li>
              </ul>
            </div>
          </div>
          <hr className='!my-15'/>
        <div className="mt-12 text-center">
          <img src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png" alt="Swiggy Dineout" className="mx-auto mb-4 w-[110px] h-[34px]" />
          <p className="text-gray-600 text-[12px]">Find the best Restaurants, Deals, Discounts & Offers</p>
          <p className="text-gray-600 mb-2">Write to us at: <a href="mailto:dineout.helpdesk@swiggy.in" className="text-red-500">dineout.helpdesk@swiggy.in</a></p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="text-red-500 hover:text-red-600"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="#D42428" fill-rule="nonzero" d="M14.81 0c8.18 0 14.81 6.63 14.81 14.81s-6.63 14.81-14.81 14.81S0 22.99 0 14.81 6.63 0 14.81 0zm5.504 9.704H9.774a2.247 2.247 0 0 0-2.247 2.248v6.028a2.247 2.247 0 0 0 2.246 2.248h10.54a2.247 2.247 0 0 0 2.248-2.248v-6.028a2.247 2.247 0 0 0-2.247-2.248zm-6.774 2.144l4.293 2.83-4.293 2.831v-5.661z"></path></svg></a>
            <a href="#" className="text-blue-600 hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="#3A5A98" fill-rule="nonzero" d="M14.81 0c8.18 0 14.81 6.63 14.81 14.81s-6.63 14.81-14.81 14.81S0 22.99 0 14.81 6.63 0 14.81 0zm3.18 8H15.69c-3.09 0-3.184 2.117-3.185 2.64v2H10.99v2.356h1.513V22h3.108v-7.004h2.086s.195-1.13.29-2.366h-2.364v-1.612c0-.24.338-.564.674-.564h1.693V8z"></path></svg></a>
            <a href="#" className="text-pink-600 hover:text-pink-700"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><linearGradient id="a" x1="50%" x2="50%" y1="99.709%" y2=".777%"><stop offset="0%" stop-color="#E09B3D"></stop><stop offset="30%" stop-color="#C74C4D"></stop><stop offset="60%" stop-color="#C21975"></stop><stop offset="100%" stop-color="#7024C4"></stop></linearGradient></defs><path fill="url(#a)" fill-rule="nonzero" d="M15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0zm3.234 7h-6.468l-.212.005A4.772 4.772 0 0 0 7 11.766v6.468l.005.212A4.772 4.772 0 0 0 11.766 23h6.468l.212-.005A4.772 4.772 0 0 0 23 18.234v-6.468l-.005-.212A4.772 4.772 0 0 0 18.234 7zm0 1.61a3.157 3.157 0 0 1 3.156 3.156v6.468l-.005.179a3.157 3.157 0 0 1-3.151 2.977h-6.468l-.179-.005a3.157 3.157 0 0 1-2.977-3.151v-6.468l.005-.179a3.157 3.157 0 0 1 3.151-2.977zM15 10.862A4.143 4.143 0 0 0 10.862 15 4.143 4.143 0 0 0 15 19.138 4.143 4.143 0 0 0 19.138 15 4.143 4.143 0 0 0 15 10.862zm0 1.61a2.529 2.529 0 1 1 0 5.057 2.529 2.529 0 0 1 0-5.058zm4.146-2.57a.992.992 0 1 0 0 1.982.992.992 0 0 0 0-1.983z"></path></svg></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="1.Home-Page" transform="translate(-762.000000, -6663.000000)" fill="#76A9EA" fill-rule="nonzero"><g id="Footer" transform="translate(1.000000, 6015.000000)"><g id="Group-61" transform="translate(647.000000, 648.000000)"><g id="ic-twitter" transform="translate(114.000000, 0.000000)"><path d="M15,4.08562073e-14 C23.2842712,4.08562073e-14 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 2.84217094e-14,23.2842712 2.84217094e-14,15 C2.84217094e-14,6.71572875 6.71572875,4.08562073e-14 15,4.08562073e-14 Z M17.9167988,9 C17.5526436,9 17.1849777,9.05970578 16.8239823,9.17747594 C15.7054976,9.54239931 14.842487,10.5129157 14.571721,11.7103141 C14.4701399,12.1594411 14.4426381,12.6089784 14.4899178,13.0464105 C14.4953401,13.0966782 14.4727535,13.1317631 14.4588271,13.1482181 C14.434368,13.1770656 14.3996884,13.1936027 14.3636825,13.1936027 C14.3596645,13.1936027 14.3555295,13.1933975 14.3514335,13.1929871 C12.0051231,12.9636824 9.87971943,11.8145993 8.33315225,9.94694179 L8.13473814,9.69927573 C8.06652698,9.61123829 7.94466401,9.60791697 7.87129401,9.68083587 L7.83912299,9.72360943 C7.53352137,10.2751185 7.37202141,10.905907 7.37202141,11.5477749 C7.37202141,12.5314635 7.74772337,13.4584829 8.40031586,14.1342867 C8.19449118,14.0829521 7.9936256,14.0094816 7.80196508,13.9151392 L7.61353017,13.8138862 C7.50908182,13.7528468 7.38357741,13.8138638 7.35270957,13.9262874 L7.34561187,13.9774103 C7.32852564,15.4387452 8.14187691,16.7390591 9.36030441,17.3245861 C9.33576734,17.3252016 9.31123027,17.3254888 9.28665419,17.3254888 C9.15789633,17.3254888 9.02806353,17.3167712 8.89878554,17.299494 L8.70548838,17.2671782 C8.58786452,17.2435524 8.48669725,17.3433025 8.49120607,17.4604538 L8.4998685,17.511418 C8.89534836,18.8102136 9.95843942,19.7675578 11.2306222,19.9849197 C10.174787,20.7304828 8.94524171,21.1237613 7.66553004,21.1237613 L7.26657831,21.123515 C7.1436589,21.123515 7.03969817,21.2078007 7.00837342,21.3330392 C6.97751678,21.4563902 7.03435385,21.5865118 7.13917279,21.6506494 C8.58120362,22.5334332 10.2260456,23 11.896595,23 C13.3588719,23 14.7267063,22.6947414 15.9621421,22.0927594 C17.0947093,21.540881 18.095541,20.7519851 18.9368232,19.7479842 C19.7205271,18.8127167 20.3333687,17.7330475 20.7582619,16.5390139 C21.1632991,15.4008289 21.3773841,14.18636 21.3773841,13.0268779 L21.3773841,12.9716449 C21.3773451,12.7854695 21.4573929,12.6102916 21.5970474,12.4910441 C22.0386692,12.113865 22.432748,11.6810038 22.771834,11.2010332 L22.9686268,10.9074663 C23.0689987,10.749523 22.9106975,10.5515706 22.7455306,10.6286342 C22.3900357,10.7944562 22.0210044,10.9252754 21.6423376,11.019984 C22.007429,10.6550401 22.2932539,10.2100134 22.4775729,9.71437337 L22.5502873,9.49894335 C22.5951918,9.35118124 22.4645624,9.22118672 22.3347584,9.25663412 L22.286465,9.27797041 C21.7596787,9.60665996 21.1922443,9.85323868 20.5998827,10.0109358 C20.5655152,10.0200866 20.5300554,10.0247235 20.4944786,10.0247235 C20.3865779,10.0247235 20.2816809,9.98258068 20.1991755,9.90609163 C19.5689356,9.32179569 18.758354,9 17.9167988,9 Z" id="Combined-Shape"></path></g></g></g></g></g></svg></a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2022 - Swiggy All Rights Reserved</p>
        </div>
        </div>
      </footer>
    </div>
  )
}
