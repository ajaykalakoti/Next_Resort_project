import Link from "next/link";


const UserNavigation = ({userName})=>{  //this userName comes from main page.js 
    return (
      <div className="navSection">
        <div className="title">
          <Link href="/" className="link">
            <h2>Holiday Resort</h2>
          </Link>
        </div>

        <div className="contact">Call now : 123 456 789</div>
        <Link href="/invoice" className="link">
          <div className="bookings">Bookings:</div>
        </Link>
        <p>
          Welcome:
          <span
            style={{
              color: "yellow",
              marginLeft: "5px",
              fontSize: "1.2rem",
              border: "none",
            }} >  {userName} </span>  {/*above userName is called in this*/}
        </p>
         <Link href="/api/auth/signout" className="link">   {/*this is logout declaration */}
          <div className="logout">Logout</div>
        </Link>
      </div>
    );
}
export default UserNavigation