import { useEffect, useRef, useState } from 'react';
import canvasImages from '../../utils/canvasImages';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const Canvas = ({details})=>{  // console.log(details.startIndex);

    const {startIndex, numImages, duration, size, top, left, zIndex} = details;

    const [index,setIndex] = useState({value:startIndex});
    const canvasRef = useRef(null);
  

    useGSAP(()=>{
        gsap.to(index,{
            value:startIndex + numImages - 1,
            duration: duration,
            repeat: -1,
            ease: 'linear',
            onUpdate:()=>{
                setIndex({value: Math.round(index.value)})
            },
        });

    });

    useEffect(()=>{
        const scale = window.devicePixelRatio; //devicePixelRatio tells us how many physical pixels represent one css pixel on the device.
        const canvas = canvasRef.current;  //gets the actual canvas DOM element
        const ctx = canvas.getContext('2d'); //gives us the tools to draw on the canvas
        const img = new Image();
        img.src = canvasImages[index.value];   //sets its source to an image from canvasImages array using current index.value
        img.onload = () => {                  //setting up image load handler-->onload is an event handler that is called when the image has been loaded.
            canvas.width = canvas.offsetWidth * scale; //canvasoffsetWidthgives the actual width of the canvas and scale is often set to window.devicePixelRatio to make the canvas look sharper on high density(Retina) displays.
            canvas.height = canvas.offsetHeight * scale; //canvasoffsetHeightgives the actual height of the canvas
            
            //setting css dimensions--->sets the visual size of the canvas in css-->Make sure the canvas appears the correct size on screen
            canvas.style.width = canvas.offsetWidth + 'px';
            canvas.style.height = canvas.offsetHeight + 'px';
            //Scaling the context-->Adjusts the drawing context to match the physical pixels-->This ensures that the image is drawn at the correct scale.
            ctx.scale(scale,scale);
            //Drawing the image-->places the image on the canvas at coordinates (0,0) and stretches it to fit the canvas's dimensions.
            //0, 0 --> starting position(top-left corner)
            ctx.drawImage(img, 0, 0,canvas.offsetWidth,canvas.offsetHeight);
        };
       

    },[index])
    return (
    <canvas 
    data-scroll
    data-scroll-speed={
        //toFixed(2) converts the number to a string representing a number with exactly two digits after the decimal point.
        //example ===> 0.215382937 --> "0.2" and 0.512369754 --> "0.5"
        Math.random().toFixed(1)
    }
    className="absolute"  
    ref={canvasRef} 
    id="canvas" 
    style={{
        width:`${size * 1.2}px`,
        height:`${size * 1.2}px`,
        top:`${top}%`,
        left:`${left}%`,
        zIndex:`${zIndex}`,
    
    }}></canvas>
);

}
export default Canvas;




// Visual Analogy:
// Think of this like setting up an automated painting system:
// Get your canvas and tools ready
// Load the picture you want to paint
// Make sure your canvas is the right size
// Wait for your picture to arrive
// When it arrives, paint it onto the canvas at the right size and position
// This code runs every time index changes, effectively creating an animation by drawing different images from the canvasImages array in sequence.