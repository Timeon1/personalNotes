// Reverse every other word in the string
function reverse(str){
    if(!str.trim()) return ''
    return str.split(' ').map((item ,index)=> index%2 == 0 ? item : item.split('').reverse().join('') ).join(' ')
}