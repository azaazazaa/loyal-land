let rootUrl = ''
if (import.meta.env.MODE === 'production') {
  rootUrl = import.meta.env.BASE_URL
} else if (import.meta.env.MODE === 'development') {
  rootUrl = import.meta.env.BASE_URL+'src/'
}
export {rootUrl}


/* 
getRootRoute(){
  if (import.meta.env.MODE === 'production') {
    return
  } else if (import.meta.env.MODE === 'development') {
    return `/${__dirname}/src/`
  }
}
export { getRootRoute }; */