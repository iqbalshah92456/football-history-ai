import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini client helper
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return null;
    if (!aiClient) {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // AI Historian Chat Endpoint
  app.post("/api/ai-historian", async (req, res) => {
    try {
      const { prompt, context } = req.body;
      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Prompt is required" });
      }

      const client = getGeminiClient();
      if (!client) {
        // Fallback intelligent curated response if no key is configured yet
        return res.json({
          response: `Football History Insight: Regarding "${prompt}" — football history is shaped by revolutionary moments, from the tactical 'Total Football' pioneered by Rinus Michels and Johan Cruyff in the 1970s, to Pelé's three World Cup triumphs (1958, 1962, 1970), Maradona's iconic 1986 masterclass in Mexico, and the modern 15-year rivalry between Lionel Messi and Cristiano Ronaldo. (Tip: Configure your GEMINI_API_KEY in the Secrets panel to activate live generative AI exploration with full match tactics, deep archives, and hypothetical scenarios!)`
        });
      }

      const systemInstruction = `You are "Football History AI", the ultimate football historian, tactician, and archivist.
You possess encyclopedic knowledge of:
- Every FIFA World Cup tournament from 1930 to present day
- Tactical revolutions (WM formation, Catenaccio, Total Football, Gegenpressing, Tiki-Taka, Sacchi's zonal pressing)
- All-time legendary players (Pelé, Maradona, Cruyff, Beckenbauer, Zidane, Messi, Ronaldo, etc.)
- Historic clubs, continental competitions (Champions League, Copa Libertadores, Euros, Copa América, AFCON, Asian Cup)
- Ballon d'Or lineage, records, and iconic matches.

Provide clear, engaging, historically precise, and objective responses. Include dates, scores, tactical nuances, and vivid context. Format with clean markdown paragraphs, bullet points, and bold terms where helpful.`;

      const contents = context 
        ? `Context / Subject: ${context}\n\nUser Question: ${prompt}`
        : prompt;

      const response = await client.models.generateContent({
        model: "gemini-3.8-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ response: response.text || "No response generated." });
    } catch (error: any) {
      console.error("AI Historian Error:", error);
      return res.status(500).json({ 
        error: error?.message || "Failed to generate football history response",
        fallback: "The football archives are temporarily experiencing heavy traffic. Please try again shortly."
      });
    }
  });

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Football History AI Server" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Football History AI server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
