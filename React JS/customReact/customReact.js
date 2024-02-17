function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)


    // const domElement = domElement.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // for (const key in reactElement.props) {
    //    if(key === 'children') continue;
    //    domElement.setAttribute(key, reactElement.props[key])
        
    // }

    // container.appendChild(domElement)
}



//object
const reactElement = {
    type: 'a', 
    props: {
        href: 'https://bing.com',
        target: '_blank'
    },
    children: "click to visit the bing."
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
