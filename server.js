const express = require("express");
const { cloudinary } = require("./cloudinary");
require("dotenv").config("./config.env");
const app = express();
const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ "Access-Control": "Allow-Origin" }));

app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.v2.search
    .expression("folder:imageGallery")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);

//   console.log("data:::---> ", resources);
//   console.log(publicIds);

  res.send(publicIds);
});

app.post("/api/upload", async (req, res) => {
  try {
    const img = req.body.data;
    const respose = await cloudinary.v2.uploader.upload(img, {
      folder: "imageGallery",
    });

    res.status(200).json({
      message: "Uploaded",
      respose,
    });
  } catch (error) {
    console.log("Error:::::::---->    ", error);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
