import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (  
    <>
    <style>
      {`
      `}
    </style>
      <main>
      <NavBar/>
        <div style={{ height: "100%"}}>
          <div style={{maxWidth: 1024, width:"100%", margin:"auto", height: "100%", padding: "32px 0"}}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Layout;