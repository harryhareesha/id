exports.handler = async () => {
    console.log('fun ran')

    const data = { name: 'mario', age: 35, job: 'plumber'}

    return {
        statusCode: 200,
        body:JSON.stringify(data)
    }
}