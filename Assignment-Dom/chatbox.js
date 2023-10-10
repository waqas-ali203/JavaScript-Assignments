function chatbox(){
    var first = document.createElement('h5')
    var second = document.createElement('p');
    var FirstNode = document.createTextNode(prompt('Who is your favourite poet?'))
    var SecondNode = document.createTextNode(prompt('Tell me somethings about your favourite poet'))
    first.appendChild(FirstNode)
    second.appendChild(SecondNode)
    var div1 = document.getElementById('second-div')
    div1.appendChild(first)
    var div2 = document.getElementById('second-div')
    div2.appendChild(second)
}