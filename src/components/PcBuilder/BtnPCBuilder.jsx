export const BtnPcBuilder1=({handelBlackWhite})=>{
    return(
    
    <div className="relative  w-full flex justify-center items-center cursor-pointer" onClick={handelBlackWhite}>
    <p className="uppercase absolute z-10">amd build</p>
    <svg xmlns="http://www.w3.org/2000/svg" 
    xlink="http://www.w3.org/1999/xlink" width="278.696" height="139.869" viewBox="0 0 278.696 139.869">
        <defs>
          <filter id="Tracé_262" x="0" y="0" width="278.696" height="139.869" filterUnits="userSpaceOnUse">
            <feOffset input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="16" result="blur"/>
            <feFlood flood-color="#ca2026"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_262)">
          <path id="Tracé_262-2" data-name="Tracé 262" d="M10.918,0H178.473L161.695,43.869H-4.223Z" transform="translate(52.22 48)" fill="#ca2026"/>
        </g>
      </svg>
      </div>
      )
}

export const BtnPcBuilder2=({handelBlackWhite})=>{
    return(
        <div className="relative b w-full flex justify-center items-center cursor-pointer" onClick={handelBlackWhite}>
        <p className="uppercase absolute z-10">intel build</p>
        <svg xmlns="http://www.w3.org/2000/svg" 
        xlink="http://www.w3.org/1999/xlink" width="278.696" height="139.869" viewBox="0 0 278.696 139.869">
            <defs>
              <filter id="Tracé_262" x="0" y="0" width="278.696" height="139.869" filterUnits="userSpaceOnUse">
                <feOffset input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="16" result="blur"/>
                <feFlood flood-color="#05C7FD"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_263)">
              <path id="Tracé_262-2" data-name="Tracé 262" d="M10.918,0H178.473L161.695,43.869H-4.223Z" transform="translate(52.22 48)" fill="#05C7FD"/>
            </g>
          </svg>
        </div>
      )
}
