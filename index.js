const express = require("express");
const app = express();

const clevertap = require("./clevertap");

// const data = [
//     {
//         "objectId": "1",
//         "type": "profile",
//         "profileData": {
//             "Name": "John Doe",
//             "Email": "john.doe@example.com",
//             "Phone": "+1234567890"
//         }
//     }
// ];

// clevertap.upload(data, { batchSize: 1000 }, (res) => {
//   console.log(res);
// });

app.get("/", async (req, res) => {
  const event = [
    {
      objectId: "2",
      type: "event",
      evtName: "Product Viewed",
      evtData: {
        "Product Name": "Smartphone",
        Category: "Electronics",
        Price: 789.99,
      },
    },
  ];

  try {
    clevertap.upload(event, { batchSize: 1000 }, (result) => {
      console.log(result);
      res.status(200).send("Event uploaded successfully");
    });
  } catch (error) {
    console.error("Error uploading event:", error);
    res.status(500).send("Failed to upload event");
  }
});

app.listen(3000, () => {
  console.log(`Server is Listening on 3000`);
});
