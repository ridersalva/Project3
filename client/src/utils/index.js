const formatDate = (Date) => {

    const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')

    return formated
}

const reduceDate = (Date) => {
    const reduced = Date.split('T')[0]
    return reduced
}

export { formatDate, reduceDate }