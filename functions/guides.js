exports.handler = async (event, context) => {
    const guides = [
        {title: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id.</p>", author: "mario"},
        {title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id.</p>", author: "yoshi"},
        {title: "small stuff", author: "toad"},
        {title: "very small indeed", author: "mario"}
    ]
if (context.clientContext.user){
    return {
        statusCode: 200,
        body: JSON.stringify(guides)
    }
}

return {
    statusCode: 401,
    body: JSON.stringify({msg: 'you must be logged in, to see this ...'})
}
}