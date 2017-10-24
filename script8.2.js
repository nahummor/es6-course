const vec1 = [1, 2, 3, 4, 5, 6]
const vec2 = [-71, 22, 333, 4, 5, 6, 7, 8, 9]

const vec3 = [...vec1, ...vec2]
console.log(vec3)

const vec4 = { ...vec1, ...vec2 }
console.log(vec4)