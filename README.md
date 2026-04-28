# LoyaltyOS

White-label AI loyalty platform. Any business plugs in via config and gets a personalised loyalty/reward engine powered by Claude AI.

## Structure

```
loyaltyos/
├── pipeline/          # LangGraph multi-agent pipeline (Python)
│   ├── agents/        # 5 specialised agent nodes
│   ├── outputs/       # JSON/markdown outputs from each agent run
│   ├── state.py       # Shared PipelineState TypedDict
│   ├── pipeline.py    # LangGraph graph definition
│   ├── run.py         # CLI entrypoint
│   └── requirements.txt
├── app/               # Next.js 14 loyalty platform
└── docs/              # Submission screenshots + pipeline transcripts
```

## Running the Pipeline

```bash
cd pipeline
pip install -r requirements.txt
cp .env.example .env   # add your ANTHROPIC_API_KEY
python run.py gaming_pub
python run.py dental_clinic
```

## Running the Next.js App

```bash
cd app
npm install
cp .env.example .env.local   # add your ANTHROPIC_API_KEY
npm run dev
```

Visit http://localhost:3000

## Demo Verticals

- `/pixelpub` — Gaming pub loyalty programme
- `/dentalplus` — Dental clinic loyalty programme

## Deploying to Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Set `ANTHROPIC_API_KEY` in Vercel environment variables
4. Deploy from `loyaltyos/app/` as root directory
