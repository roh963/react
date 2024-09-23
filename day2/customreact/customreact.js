function customContain(reactEl,containers){
/*
const docEl= document.createElement(reactEl.type)
docEl.innerHTML = reactEl.children
docEl.setAttribute('href',reactEl.props.href)
docEl.setAttribute('target',reactEl.props.target)
containers.appendChild(docEl)
*/
const docElement = document.createElement(reactEl.type)
docElement.innerHTML = reactEl.children
for(const prop in reactEl.props){
    if(prop ==='children') continue
    docElement.setAttribute(prop,reactEl.props[prop])
}
containers.appendChild(docElement)
}

const reactEl={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'clieck to visit google'
}

const mainContainer = document.querySelector('#root')

customContain(reactEl,mainContainer)
