const formatDate = (Date) => {

    const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')

    return formated
}

export default formatDate