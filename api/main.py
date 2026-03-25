from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router as api_router

app = FastAPI(title="Proxy Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/agent")

@app.get("/")
async def health_check():
    return {"status": "Proxy is online"}