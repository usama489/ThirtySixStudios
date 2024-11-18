import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Ui = ({ showCanvas, setShowCanvas,toggleTheme,theme }) => {
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  console.log(showCanvas);

    


 

  useEffect(() => {
   
   const handleClick =  (e) => {

      setShowCanvas((prevShowCanvas)=>{
        //true
        if(!prevShowCanvas){
          
            gsap.set(growingSpan.current, {
              top: e.clientY,
              left: e.clientX,
            });

            gsap.to("body",{
              color:"#000",
              backgroundColor:"#fd2c2a", //red
              duration:1.2,
              ease:"power2.inOut",
            });
          
    
        
    
           gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete:()=>{
              gsap.set(growingSpan.current,{
                scale:0,
                clearProps:"all",
              })
            }
            
          });
          //------------------


        
        }else{
            gsap.to("body",{
              color:"#000",
              backgroundColor:"#fff",
              duration:1.2,
              ease:"power2.inOut",
            })
            // toggleTheme();
          
       
            


          gsap.set(growingSpan.current,{
            scale:0,
            clearProps:"all",
          });
        

        }
        return !prevShowCanvas;
       
      });

   };
   const handleMouseMove = (e) => {
    gsap.set(growingSpan.current, {
      top: e.clientY,
      left: e.clientX,
    });
  };

    const headingElement = headingRef.current;
    headingElement.addEventListener("click",handleClick);
    window.addEventListener("mousemove", handleMouseMove);
    return ()=>{headingElement.removeEventListener("click",handleClick)
      window.removeEventListener("mousemove", handleMouseMove);
    };

     
  }, []);
  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-0 left-0 w-5 h-5 bg-red-500"
      ></span>
      <div className="container absolute min-w-full min-h-full top-16 ">
        <div className="one flex mx-[25%] my-10">
          <div className="flex flex-col">
            <div className="w-96 h-48 text-4x">
              <h1>
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h1>
            </div>

            <div className="w-96 h-32">
              <p>
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
            </div>
            <div className="w-64 h-24 ">Scroll</div>
          </div>

          <div className="flex min-w-full"> </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div ref={headingRef} className="two text-[14rem]">
          Thirtysixstudio
        </div>
        <div className="border border-b-gray-200"></div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className="three flex mx-[10%] mt-16 mb-64  ">
          <div className="  min-w-64 text-2xl ml-60">01 —— WHAT WE DO</div>
          <div className="flex flex-col ml-[25%]">
            <div className="w-[26rem] h-36 mb-44">
              <h1 className="text-4xl font-200">
                We aim to revolutionize digital production in the advertising
                space, bringing your ideas to life.
              </h1>
            </div>
            <div className="w-[26rem] h-24">
              <p>
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver seamless digital work.
              </p>
            </div>
            <div className="w-[26rem] h-24 ">
              <p>
                Our commitment to creativity, innovation, and simplicity, paired
                with our agile approach, ensures your journey with us is smooth
                and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
        <div className="border border-b-gray-200"></div>

        <div className="four flex flex-col mx-auto   w-[50%] mt-24 gap-12">
          <div className="font-200">
            <p>OUR SERVICES</p>
          </div>

          <div className="text-4xl font-200">
            <h1>
              We provide captivating design,interactive animations,advanced
              usability,reliable code, and immaculate project coordination.
              Whether you need campaign built from scratch or assistance at a
              specific phase,we’ve got you covered.
            </h1>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- */}
        <div className="border border-b-gray-200 mt-10"></div>
      </div>
    </>
  );
};
export default Ui;
