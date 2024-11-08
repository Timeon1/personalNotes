// example "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  const rgb = { r: 0 , g: 0 , b: 0 }

  parseInt('ff',16)
  
  return { r:  parseInt(hexString[1]+hexString[2],16), g: parseInt(hexString[3]+hexString[4],16) , b: parseInt(hexString[5]+hexString[6],16) }

}

hexStringToRGB('#FF9933')