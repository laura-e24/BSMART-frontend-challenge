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
        <div style={{ paddingTop: 100, paddingBottom: 100}}>
          <div style={{maxWidth: 1024, width:"100%", margin:"auto"}}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Layout;