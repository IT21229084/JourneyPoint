
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wv3aywb.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //Create Db
        const db = client.db("JourneyPoint");
        const jobsAll = db.collection("jobs");

        //post Job
        app.post("/postJob", async (req, res) => {
            const body = req.body;
            body.createAt = new Date()

            const result = await jobsAll.insertOne(body)
            if (result.insertedId) {
                return res.status(200).send(result)
            } else {
                return res.status(404).send({
                    message: "can not insert!, Try again.",
                    status: false
                })
            }

        })

        //get all jobs
        app.get("/jobs", async (req, res) => {
            const jobs = await jobsAll.find({}).toArray()
            res.send(jobs)

        })

        //get jobs by email 

        app.get("/jobs/:email", async (req, res) => {
            // console.log(req.params.email)
            const jobs = await jobsAll.find({ postedBy: req.params.email }).toArray()
            res.send(jobs)
        })

        //get job

        // app.get("/jobs/:id", async (req, res) => {
        //     const id = req.params.id
        //     const job = await jobsAll.findOne({
        //         _id: new ObjectId(id)
        //     })
        //     res.send(job)
        //     console.log(job)
        // })
        app.get("/jobs/:id", async (req, res) => {
            try {
                const id = req.params.id
                const filter = { _id: new ObjectId(id) }
                const job = await jobsAll.findOne(filter)
                console.log(id);
                if (!job) {
                    return res.status(404).send("Job not found");
                }

                res.send(job);
                console.log(job);

            } catch (error) {
                console.error("Error fetching job:", error);
                res.status(500).send("Internal Server Error");
            }
        });

        //Update job

        app.put("/update/:id", async (req, res) => {
            const id = req.params.id
            const jobData = req.body
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateDoc = {
                $set: {
                    ...jobData 
                }
            }
            const result = await jobsAll.updateOne(filter, updateDoc, options)
            res.send(result)
        })

        //delete a job
        app.delete('/jobs/:id', async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const result = await jobsAll.deleteOne(filter)
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

 
run().catch(console.dir);


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})