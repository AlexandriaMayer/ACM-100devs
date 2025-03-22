function getSize(width, height, depth){
  // surface area = 2(l * b + b * h + l * h)
  let surfaceArea = 2*(width * depth + depth * height + height * width)
  let volume = width * height * depth
  return [surfaceArea, volume]
}
 // of a box. not too hard
