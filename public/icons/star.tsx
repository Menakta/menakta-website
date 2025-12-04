
interface Props{
    width:number|string,
    height:number| string
}
const StarIcon=({width,height}:Props)=>{
    return(
         <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
  >
    <polygon
      points="
        50,0 
        61,35 
        98,35 
        68,57 
        79,91 
        50,70 
        21,91 
        32,57 
        2,35 
        39,35
      "
      fill="url(#starGradient)"
    />
    <defs>
      <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#000dffff" />
        <stop offset="100%" stopColor="#b34fffff" />
      </linearGradient>
    </defs>
  </svg>
    )
}

export default StarIcon