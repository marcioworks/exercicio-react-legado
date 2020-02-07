import React from 'react'

function chidrenWithProps(children, props) {
    return (React.Children.map(props.children,
        child => React.cloneElement(child, {...props })))
}

export { chidrenWithProps }