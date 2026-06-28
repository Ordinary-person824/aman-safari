import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
apiKey:"YOUR_OPENAI_API_KEY"
});

app.post("/chat", async (req,res)=>{

try{

const userMessage = req.body.message;

const completion =
await client.chat.completions.create({

model:"gpt-4.1-mini",

messages:[

{
role:"system",
content:`

You are Aman AI.

You can answer general questions.

Capabilities:
- normal conversation
- explain ideas
- help with travel
- answer school questions
- coding help
- booking guidance

If user asks safari questions,
switch naturally into travel assistant mode.

Keep answers clear and friendly.

`
},

{
role:"user",
content:userMessage
}

]

});

res.json({

reply:
completion
.choices[0]
.message
.content

});

}

catch(err){

res.status(500).json({

reply:
"AI temporarily unavailable"

});

}

});

app.listen(3000,()=>{

console.log("AI ready");

});
