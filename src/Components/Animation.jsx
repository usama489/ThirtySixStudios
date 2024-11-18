import Canvas from "./Canvas"
import data from "../../utils/data"


const Animation = ()=>{

    return(
      <>
        <div className="canvas w-full min-h-screen relative font-['Helvetica']"  style={{ zIndex: 1 }}>
        
        {data[0].map((canvasDetails, index) => (
          <Canvas key={`canvas-${index}`} details={canvasDetails} />
        ))}
        
      </div>
      {/* <div className="canvas w-full min-h-screen  relative font-['Helvetica']"  style={{ zIndex: 1 }}>
        {data[1].map((canvasDetails, index) => (
          <Canvas key={`canvas-${index}`} details={canvasDetails} />
        ))}
      </div>
      <div className="canvas w-full min-h-screen  relative font-['Helvetica']"  style={{ zIndex: 1 }}>
        {data[2].map((canvasDetails, index) => (
          <Canvas key={`canvas-${index}`} details={canvasDetails} />
        ))}
      </div>
      <div className="canvas w-full min-h-screen  relative font-['Helvetica']"  style={{ zIndex: 1 }}>
        {data[3].map((canvasDetails, index) => (
          <Canvas key={`canvas-${index}`} details={canvasDetails} />
        ))}
      </div> */}
      </>
    )
}
export default Animation;