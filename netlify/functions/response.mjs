export default async (req, context) => {
    // Accessing the body of the request
    const requestBody = req.body;
  
    // Assuming requestBody contains the data sent in the request
    console.log(requestBody);
  
    // You can now use the data in requestBody as needed
    // For example, returning a response based on the received data
    return new Response(`Received data: ${JSON.stringify(requestBody)}`);
  };
  