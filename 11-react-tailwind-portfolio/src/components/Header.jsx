import wasimPhoto from "../assets/wasim.jpg";

const Header = () =>{

    return  <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
        <div>
            <div className="font-bold text-3xl">MD WASIM HASAN</div>
            <div className="text-xl">Front End Developer</div>
        </div>
        <img className="rounded-full w-24" src={wasimPhoto} alt="" />
         
    </header>;
    
}

export default Header;