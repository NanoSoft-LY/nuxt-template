const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
