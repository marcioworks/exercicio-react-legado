import React from 'react'

function childrenWithProps(children, props) {
<<<<<<< HEAD
    return (React.Children.map(props.children,
        child => React.cloneElement(child, {...props })))
=======
    return React.Children.map(props.children,
        child => React.cloneElement(child, { ...props }))
>>>>>>> 83b8294ed5f1d5cd9ca5384738e2004fd6760fa5
}

export { childrenWithProps }