function query(data) {
    return fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
        {
            headers: {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json" // Set content type to JSON
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    ).then(response => response.json());
}


function getMixtralResponse(input) {
    return query({ "inputs": input });
}

export { query, getMixtralResponse };